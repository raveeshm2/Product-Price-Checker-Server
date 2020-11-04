import session from "express-session";
import connectMongo from "connect-mongo";
import mongoose from "../db/mongoose";

const MongoStore = connectMongo(session);

export default session({
    name: "qqid",
    secret: process.env.SECRET_KEY!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
});