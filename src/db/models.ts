import mongoose from './mongoose'
import { product } from "./schema/product"

export const productModel = new product().getModelForClass(product, {
    existingMongoose: mongoose
});