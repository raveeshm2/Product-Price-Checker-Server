import "reflect-metadata";
import axios from 'axios';
import * as cheerio from 'cheerio';
import express, { NextFunction, Request, Response } from 'express';
import "./db/mongoose";
import { productModel } from "./db/models";
import * as bodyParser from "body-parser";
import cron from 'node-cron';
import { enableCronJob } from "./cron";
import { product } from "./db/schema/product"
import { InstanceType } from "@hasezoey/typegoose";
import cors from "cors";

export interface ProductInterface {
    alias: string
    url: string,
    cutOffPrice: number,
    portal: 'Flipkart' | 'Amazon'
}

const app = express();

app.use(cors());

export let cronGlobal: cron.ScheduledTask | null = null;

app.use(bodyParser.json());

const getFlipKartProductPromise = (product: InstanceType<product>) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('._1vC4OE').html()?.split(';')[1].replace(',', '');
        let price;
        if (priceElement)
            price = parseInt(priceElement)
        const productName = $('._35KyD6').html();
        resolve({ id: product._id, alias: product.alias, productName, url: product.url, portal: product.portal, price, cutOffPrice: product.cutOffPrice });
    });
}

const getAmazonProductPromise = (product: InstanceType<product>) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('#priceblock_dealprice').html() || $('#priceblock_ourprice').html() || $('.priceBlockStrikePriceString').html();
        let price;
        if (priceElement)
            price = parseInt(priceElement.split(';')!.pop()!.replace(',', ''));
        const productName = $('span#productTitle').html()?.trim();
        const imgURL = $('#landingImage').attr('data-old-hires');
        resolve({ id: product._id, alias: product.alias, productName, url: product.url, portal: product.portal, imgURL, price, cutOffPrice: product.cutOffPrice });
    });
}

export const getAllData = async () => {
    const data = await productModel.find({});
    const allData: any = [];
    data.forEach(product => {
        if (product.portal === 'Flipkart')
            allData.push(getFlipKartProductPromise(product));
        else
            allData.push(getAmazonProductPromise(product));
    });
    const results = await Promise.all(allData);
    return results;
}

app.get('/scrape', async (req, res) => {
    const results = await getAllData();
    res.send(`<pre>${results.map(product => JSON.stringify(product, null, 2))}</pre>`);
});

app.post('/product', async (req, res, next) => {
    const alias = req.body.alias;
    const url = req.body.url;
    const cutOffPrice = req.body.cutOffPrice;
    const portal = req.body.portal;
    if (!alias) return next(new Error('Please provide alias name'));
    if (!url) return next(new Error('Please provide product URL'));
    if (!cutOffPrice) return next(new Error('Please provide a cut off price'));
    if (!portal) return next(new Error('Please provide portal name'));
    if (portal !== 'Flipkart' && portal !== 'Amazon') return next(new Error('Invalid portal name. Only Flipkart and Amazon portals are supported for now'));
    try {
        await productModel.create({
            alias,
            url,
            cutOffPrice,
            portal
        });
    } catch (err) {
        return res.send({ error: 'Error creating Product. Please try again later' });
    }
    return res.send({ message: 'Product added successfully' });
});


app.delete('/product', async (req, res, next) => {
    const id = req.body.id;
    if (!id) return next(new Error('Product ID is required'));
    const product = await productModel.findById(id);
    if (!product) return next(new Error('Product not found in database'));
    try {
        await product.deleteOne();
    } catch (err) {
        return next(new Error('Product deletion failed. Please try again later'));
    }
    return res.send({ message: 'Product deleted successfully' });
});

app.put('/product', async (req, res, next) => {
    const id = req.body.id;
    const cutOffPrice = req.body.cutOffPrice;
    const alias = req.body.alias;
    const url = req.body.url;
    const portal = req.body.portal;
    if (!id) return next(new Error('Product ID is required'));
    const product = await productModel.findById(id);
    if (!product) return next(new Error('Product not found in database'));
    if (portal && portal !== 'Flipkart' && portal !== 'Amazon') return next(new Error('Invalid portal name. Only Flipkart and Amazon portals are supported for now'));
    try {
        if (cutOffPrice)
            product.cutOffPrice = cutOffPrice;
        if (alias)
            product.alias = alias;
        if (url)
            product.url = url;
        if (portal)
            product.portal = portal;
        await product.save();
    } catch (err) {
        return next(new Error('Product could not be updated. Please try again later'));
    }
    return res.send({ message: 'Product updated successfully' });
});

app.post('/startcronjob', (req, res, next) => {
    let format: string = req.body.hour;
    let restarted = false;
    if (!req.body.hour)
        format = '*'; // By Default run cron job every hour
    // To run every 2 hour, 6 hour or so. User can send '*/2' or '*/6' in request.
    if (!cron.validate(`* ${format} * * *`)) throw new Error('Invalid cron format provided');
    if (cronGlobal) {
        restarted = true;
        cronGlobal.destroy();
    }
    cronGlobal = enableCronJob(`* ${format} * * *`);
    if (restarted) {
        return res.send({ message: 'CRON job restarted successfully' });
    } else {
        return res.send({ message: 'CRON job started successfully' });
    }
});

app.post('/stopcronjob', (req, res, next) => {
    if (!cronGlobal)
        throw new Error('Cron Job is not running');
    cronGlobal.destroy();
    cronGlobal = null;
    return res.send({ message: 'CRON job stopped successfully' });
})

// Get status of currently cronning job
app.get('/cronjobstatus', (req, res, next) => {
    if (!cronGlobal) {
        throw new Error('CRON job not running');
    }
    return res.send({ message: cronGlobal.getStatus() });
})

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send({ error: err.message });
})

app.listen(process.env.PORT || 4500, () => {
    console.log('Server running on port 4500');
});