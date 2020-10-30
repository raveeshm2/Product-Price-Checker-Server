import mongoose from './mongoose'
import { product } from "./schema/product"
import { user } from "./schema/user";

export const productModel = new product().getModelForClass(product, {
    existingMongoose: mongoose
});

export const userModel = new user().getModelForClass(user, {
    existingMongoose: mongoose
});