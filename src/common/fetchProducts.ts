import Axios from "axios";
import { product } from "../db/schema/product";
import * as cheerio from 'cheerio';
import { InstanceType } from "@hasezoey/typegoose";
import { productModel } from "../db/models";

const getFlipKartProductPromise = (product: InstanceType<product>) => {
    return new Promise(async (resolve, reject) => {
        const html = (await Axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('._1vC4OE').html()?.split(';')[1].replace(',', '');
        let price;
        if (priceElement)
            price = parseInt(priceElement)
        const productName = $('._35KyD6').html();
        resolve({ id: product._id, alias: product.alias, productName, url: product.url, portal: product.portal, price, cutOffPrice: product.cutOffPrice, imgURL: product.imgURL });
    });
}

const getAmazonProductPromise = (product: InstanceType<product>) => {
    return new Promise(async (resolve, reject) => {
        const html = (await Axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const priceElement = $('#priceblock_dealprice').html() || $('#priceblock_ourprice').html() || $('.priceBlockStrikePriceString').html();
        let price;
        if (priceElement)
            price = parseInt(priceElement.split(';')!.pop()!.replace(',', ''));
        const productName = $('span#productTitle').html()?.trim();
        const imgURL = product.imgURL || $('#landingImage').attr('data-old-hires');
        resolve({ id: product._id, alias: product.alias, productName, url: product.url, portal: product.portal, imgURL, price, cutOffPrice: product.cutOffPrice });
    });
}

export const getAllData = async () => {
    try {
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
    } catch (err) {
        return { error: 'Error occured ' + err }
    }
}