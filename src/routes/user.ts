import express from 'express';
import { userModel } from '../db/models';
import * as bcrypt from "bcryptjs";
import authenticator from '../middlewares/authenticator';

const router = express.Router();

router.post('/login', async (req, res, next) => {
    if (!req.body.email) {
        return next(new Error('Please provide email address'));
    }
    if (!req.body.password) {
        return next(new Error('Please provide password'));
    }
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return next(new Error("User not found"));
    }
    try {
        const result = await bcrypt.compare(req.body.password, user!.password);
        if (result) {
            req.session!.userID = user._id;
            return res.status(200).send({ message: ["Login Successful !!"] });
        }
    } catch (err) {
        return next(new Error('Invalid login credentials'));
    }
    return next(new Error('Invalid login credentials'));
});

router.put('/change', authenticator, async (req, res, next) => {
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