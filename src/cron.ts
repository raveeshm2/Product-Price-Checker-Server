import cron from 'node-cron';
import * as nodeMailer from "nodemailer";
// @ts-ignore
import sendgridTransport from "nodemailer-sendgrid-transport";
import { getAllData } from "./app";

const transporter = nodeMailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}));

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

export const enableCronJob = () => {
    cron.schedule("* * * * *", async () => {
        console.log("Running Cron Job");
        const results = await getAllData();
        const filtered = results.filter((product: any) => product.price <= product.cutOffPrice);
        console.log('filtered results', filtered);
        const htmlResults = getHTMLforFilteredResults(filtered);
        console.log('html resilts', htmlResults);
        try {
            await transporter.sendMail({
                from: `NodeUser@gmail.com`, // sender address
                to: 'raveeshm2@gmail.com', // list of receivers
                subject: "Filtered list", // Subject line
                html: `Filtered results from heroku are: ${htmlResults}`
            });
        } catch (err) {
            console.log('Error sending email');
            console.log('err', err);
        }
    });
}