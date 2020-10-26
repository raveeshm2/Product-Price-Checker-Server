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

const getProductPromise = (product: any) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const price = $('._1vC4OE').html()?.split(';')[1].replace(',', '');
        const productName = $('._35KyD6').html();
        if (!price)
            return reject('Product not found');
        resolve({ ...product._doc, price: parseInt(price), productName });
    });
}

export const getAllData = async () => {
    const data = await productModel.find({});
    const allData: any = [];
    data.forEach(product => {
        allData.push(getProductPromise(product));
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