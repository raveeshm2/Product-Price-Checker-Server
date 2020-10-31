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

// Checks for environment variables before booting applications and throw error
// if any of the required variable is missing
checkForEnvironmentVariables();

const app = express();

app.use(cors());

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
    res.status(500).send({ error: err.message });
})

app.listen(process.env.PORT || 4500, () => {
    console.log(`Server running on port ${process.env.PORT || '4500'}`);
}).setTimeout(60 * 5 * 1000); // 5 mins default timeout