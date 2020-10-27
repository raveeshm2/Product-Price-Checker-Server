import mongoose from 'mongoose';
import * as fs from 'fs';
import { ProductInterface } from "./../app";
import { productModel } from './models';

const initDB = () => {
    const data: ProductInterface[] = JSON.parse(fs.readFileSync("data.json", 'utf-8'));
    data.forEach(async product => {
        await productModel.create({
            ...product
        });
    });
}

console.log('Connecting to mongo db');
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@raveesh.wlkt9.mongodb.net/PriceChecker?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDB Connected');
        // console.log('Initializing DB');
        // initDB();
        // console.log('DB initialized');
    }).catch(err => console.log("errorErrorError ", err));

export default mongoose;