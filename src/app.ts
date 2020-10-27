import "reflect-metadata";
import axios from 'axios';
import * as cheerio from 'cheerio';
import express from 'express';
import "./db/mongoose";
import { productModel } from "./db/models";
import { enableCronJob } from "./cron";

export interface product {
    alias: string,
    productName: string,
    url: string,
    cutOffPrice: number,
    portal: 'Flipkart' | 'Amazon'
}

const app = express();

const getFlipKartProductPromise = (product: any) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('._1vC4OE').html()?.split(';')[1].replace(',', '');
        let price;
        if (priceElement)
            price = parseInt(priceElement)
        const productName = $('._35KyD6').html();
        resolve({ ...product._doc, price, productName });
    });
}

const getAmazonProductPromise = (product: any) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('#priceblock_dealprice').html() || $('#priceblock_ourprice').html() || $('.priceBlockStrikePriceString').html();
        let price;
        if (priceElement)
            price = parseInt(priceElement.split(';')!.pop()!.replace(',', ''));
        const productName = $('span#productTitle').html()?.trim();
        const imgURL = $('#landingImage').attr('data-old-hires');
        resolve({ ...product, price, productName, imgURL });
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
    res.send(results);
});

app.listen(process.env.PORT || 4500, async () => {
    console.log('Server running on port 4500');
});