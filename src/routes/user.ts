import express from 'express';
import { userModel } from '../db/models';
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const router = express.Router();

router.get('/login', async (req, res, next) => {
    const user = await userModel.findOne({});
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
        throw new Error('Invalid login credentials');
    }
    throw new Error('Invalid login credentials');
});

router.put('/change', async (req, res, next) => {
    const user = await userModel.findOne({});
    user!.password = await bcrypt.hash(process.env.DEFAULT_PASSWORD!, 12);
    await user!.save();
    return res.status(200).send({ message: ["Password changed successfully"] });
});

export default router;