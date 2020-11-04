import { productModel, userModel } from "../db/models";
import * as bcrypt from "bcryptjs";

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
}

export const timeOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, process.env.NODE_ENV !== "production" ? 2000 : 0);
    })
}