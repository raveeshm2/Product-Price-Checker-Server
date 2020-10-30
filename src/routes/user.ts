import express from 'express';
import { userModel } from '../db/models';
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const router = express.Router();

router.post('/login', async (req, res, next) => {
    const user = await userModel.findOne({});
    if (!req.body.password) {
        return next(new Error('Please provide password'));
    }
    try {
        const result = await bcrypt.compare(req.body.password, user!.password);
        if (result) {
            const token = jwt.sign({ userID: user!._id.toString() }, process.env.JWT_KEY!, { expiresIn: '7d' });
            return res.status(200).send({
                token,
                message: ["Login Successful !!"]
            });
        }
    } catch (err) {
        return next(new Error('Invalid login credentials'));
    }
    return next(new Error('Invalid login credentials'));
});

router.put('/change', async (req, res, next) => {
    const user = await userModel.findOne({});
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;
    if (!currentPassword || !newPassword)
        return next(new Error('Please provide old and new passwords'));
    const match = await bcrypt.compare(currentPassword, user!.password);
    if (match) {
        user!.password = await bcrypt.hash(newPassword, 12);
        await user!.save();
        return res.status(200).send({ message: ["Password changed successfully"] });
    }
    next(new Error("Incorrect old password provided"));
});

export default router;