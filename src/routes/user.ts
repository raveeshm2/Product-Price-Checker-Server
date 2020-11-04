import express from 'express';
import { userModel } from '../db/models';
import * as bcrypt from "bcryptjs";
import authenticator from '../middlewares/authenticator';
import { timeOut } from '../common/util';

const router = express.Router();

router.post('/login', async (req, res, next) => {
    await timeOut();
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
            req.session!.save((val: any) => console.log('State saved', val));
            return res.status(200).send({ message: ["Login Successful !!"] });
        }
    } catch (err) {
        return next(new Error('Invalid login credentials'));
    }
    return next(new Error('Invalid login credentials'));
});

router.post('/logout', authenticator, async (req, res, next) => {
    req.session?.destroy((err) => console.log('any error', err));
    res.clearCookie('qqid');
    return res.send({ message: ["Logout Successful !!"] });
})

router.put('/change', authenticator, async (req, res, next) => {
    await timeOut();
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