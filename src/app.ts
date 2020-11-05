import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "./db/mongoose";
import * as bodyParser from "body-parser";
import cors from "cors";
import { getAllData } from "./common/fetchProducts";
import ProductRouter from "./routes/product"
import CronJobRouter from "./routes/cron";
import UserRouter from "./routes/user";
import { checkForEnvironmentVariables } from "./common/util";
import session from "./middlewares/session";
import authenticator from "./middlewares/authenticator";
import * as path from 'path';

// Checks for environment variables before booting applications and throw error
// if any of the required variable is missing
checkForEnvironmentVariables();

const app = express();

if (process.env.NODE_ENV !== "production") {
    app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
}

app.use(bodyParser.json());

app.use(session);

app.use('/product', authenticator, ProductRouter);

app.use('/cron', authenticator, CronJobRouter);

app.use('/user', UserRouter);

app.get('/scrape', authenticator, async (req, res, next) => {
    const results = await getAllData();
    return res.send(results);
});

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send({ errors: [err.message] });
});

// Serve React APP on the same URL if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '..', 'build-client')));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '..', 'build-client', 'index.html'));
    });
}

app.listen(process.env.PORT || 4500, () => {
    console.log(`Server running on port ${process.env.PORT || '4500'}`);
}).setTimeout(60 * 7 * 1000); // 7 mins default timeout