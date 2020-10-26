import * as fs from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';
import express from 'express';
import cron from 'node-cron';
import * as nodeMailer from "nodemailer";
// @ts-ignore
import sendgridTransport from "nodemailer-sendgrid-transport";

interface product {
    productName: string,
    url: string,
    cutOffPrice: number
}

const app = express();

const transporter = nodeMailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}));

const getProductPromise = (product: product) => {
    return new Promise(async (resolve, reject) => {
        const html = (await axios.get(product.url)).data;
        const $ = cheerio.load(html);
        const price = $('._1vC4OE').html()?.split(';')[1].replace(',', '');
        const productName = $('._35KyD6').html();
        if (!price)
            return reject('Product not found');
        resolve({ ...product, price: parseInt(price), productName });

    });
}

const getAllData = async () => {
    const data: product[] = JSON.parse(fs.readFileSync("data.json", 'utf-8'));
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

app.get('/test', (req, res) => res.send(`Testing environment MY_TEST variable ${process.env.MY_TEST}`));

const getHTMLforFilteredResults = (filtered: any) => {
    let html = '<table border="1"><tr>';
    html = html.concat('<th>Alias</th><th>Product Name</th><th>Current Price</th><th>Cut off Price</th>');
    html = html.concat('</tr>')
    filtered.forEach((product: any) => {
        html = html.concat('<tr>');
        html = html.concat(`<td>${product.alias}</td><td>${product.productName}</td><td>${product.price}</td><td>${product.cutOffPrice}</td>`);
        html = html.concat('</tr>');
    });
    return html;
}

app.listen(process.env.PORT || 4500, () => {
    console.log('Server running on port 4500');
    // cron.schedule("* * * * *", async () => {
    //     console.log("Running Cron Job");
    //     const results = await getAllData();
    //     const filtered = results.filter((product: any) => product.price <= product.cutOffPrice);
    //     console.log('filtered results', filtered);
    //     const htmlResults = getHTMLforFilteredResults(filtered);
    //     console.log('html resilts', htmlResults);
    //     try {
    //         await transporter.sendMail({
    //             from: `NodeUser@gmail.com`, // sender address
    //             to: 'raveeshm2@gmail.com', // list of receivers
    //             subject: "Filtered list", // Subject line
    //             html: `Filtered results from heroku are: ${htmlResults}`
    //         });
    //     } catch (err) {
    //         console.log('Error sending email');
    //         console.log('err', err);
    //     }
    // });
});