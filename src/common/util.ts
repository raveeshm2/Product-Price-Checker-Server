import { productModel, userModel } from "../db/models";
import * as bcrypt from "bcryptjs";
import { enableCronJob } from "./cron";
import { setCronGlobal } from "../routes/cron";
import Axios from "axios";

async function clearDB() {
    await userModel.deleteMany({});
    await productModel.deleteMany({});
}

// Check for existence of Default Email and Default Password before calling it
export async function init() {
    await clearDB();
    await userModel.create({
        email: process.env.DEFAULT_EMAIL!,
        password: await bcrypt.hash(process.env.DEFAULT_PASSWORD!, 12)
    })
}

export function generateErrorMessage(variable: string) {
    return `Please set ${variable} environment variable before starting the application`;
}

// Checks for required environment variables while booting up right in the beginning
export const checkForEnvironmentVariables = () => {
    if (!process.env.MONGO_URI) {
        throw new Error(generateErrorMessage('MONGO_URI'));
    }
    if (!process.env.SECRET_KEY) {
        throw new Error(generateErrorMessage('SECRET_KEY'));
    }
    if (!process.env.SENDGRID_KEY) {
        throw new Error(generateErrorMessage('SENDGRID_KEY'));
    }
    if (process.env.NODE_ENV === "production" && !process.env.APP_URL) {
        throw new Error(generateErrorMessage('APP_URL'));
    }
}

export const timeOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, process.env.NODE_ENV !== "production" ? 2000 : 0);
    })
}

// Runs cron jobs after waking up from sleep state
export async function checkForCronJobs() {
    const user = await userModel.findOne({});
    if (user && user.cron) {
        console.log("Restarting CRON job");
        setCronGlobal(enableCronJob(user.cron));
    }
}

export function frequencyToTextMapper(freq: string): string {
    switch (freq) {
        case '*/15 * * * *':
            return '15 minutes';
        case '*/30 * * * *':
            return '30 minutes';
        case '0 */1 * * *':
            return '1 hour';
        case '0 */2 * * *':
            return '2 hours';
        case '0 */4 * * *':
            return '4 hours'
        case '0 */6 * * *':
            return '6 hours';
        case '0 */8 * * *':
            return '8 hours';
        case '0 */12 * * *':
            return '12 hours';
        case '30 11 */1 * *':
            return 'day';
        case '30 11 */7 * *':
            return 'week'
        case '30 11 15 */1 *':
            return 'month';
    }
    return 'day';
}

export function startKeepAlive() {
    console.log('Starting Keep Awake function');
    return setInterval(function () {
        Axios.get(process.env.APP_URL!).
            then(res => console.log('Pinging APP URL Success')).catch(err => {
                console.log('Pinging APP URL failure', err);
            });
    }, 20 * 60 * 1000); // load every 20 minutes
}