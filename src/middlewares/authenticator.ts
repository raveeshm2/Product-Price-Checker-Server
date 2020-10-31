import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    if (!req.session!.userID) {
        throw new Error("User is not authenticated");
    }
    next();
}