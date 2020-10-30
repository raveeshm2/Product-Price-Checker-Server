import express from 'express';
import { productModel } from '../db/models';

const router = express.Router();

router.post('/', async (req, res, next) => {
    const alias = req.body.alias;
    const url = req.body.url;
    const cutOffPrice = parseInt(req.body.cutOffPrice);
    const portal = req.body.portal;
    const imgURL = req.body.imgURL;
    if (!alias) return next(new Error('Please provide alias name'));
    if (!url) return next(new Error('Please provide product URL'));
    if (!cutOffPrice) return next(new Error('Please provide a cut off price'));
    if (!portal) return next(new Error('Please provide portal name'));
    if (portal !== 'Flipkart' && portal !== 'Amazon') return next(new Error('Invalid portal name. Only Flipkart and Amazon portals are supported for now'));
    try {
        await productModel.create({
            alias,
            url,
            cutOffPrice,
            portal,
            imgURL
        });
    } catch (err) {
        return next(new Error('Error creating Product. Please trya again later'));
    }
    return res.send({ message: 'Product added successfully' });
});


router.delete('/', async (req, res, next) => {
    const id = req.body.id;
    if (!id) return next(new Error('Product ID is required'));
    const product = await productModel.findById(id);
    if (!product) return next(new Error('Product not found in database'));
    try {
        await product.deleteOne();
    } catch (err) {
        return next(new Error('Product deletion failed. Please try again later'));
    }
    return res.send({ message: 'Product deleted successfully' });
});

router.put('/', async (req, res, next) => {
    const id = req.body.id;
    const cutOffPrice = parseInt(req.body.cutOffPrice);
    const alias = req.body.alias;
    const url = req.body.url;
    const portal = req.body.portal;
    const imgURL = req.body.imgURL;
    if (!id) return next(new Error('Product ID is required'));
    const product = await productModel.findById(id);
    if (!product) return next(new Error('Product not found in database'));
    if (portal && portal !== 'Flipkart' && portal !== 'Amazon') return next(new Error('Invalid portal name. Only Flipkart and Amazon portals are supported for now'));
    try {
        if (cutOffPrice)
            product.cutOffPrice = cutOffPrice;
        if (alias)
            product.alias = alias;
        if (url)
            product.url = url;
        if (portal)
            product.portal = portal;
        if (imgURL)
            product.imgURL = imgURL;
        await product.save();
    } catch (err) {
        return next(new Error('Product could not be updated. Please try again later'));
    }
    return res.send({ message: 'Product updated successfully' });
});

export default router;