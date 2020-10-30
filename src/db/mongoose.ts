import mongoose from 'mongoose';
import { init } from "../common/util";

console.log('Connecting to mongo db');
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@raveesh.wlkt9.mongodb.net/PriceChecker?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDB Connected');
        if (process.env.init === 'Y') {
            if (!process.env.DEFAULT_EMAIL || !process.env.DEFAULT_PASSWORD) {
                throw new Error('Default email and password not provided. Please update environment variables properly');
            }
            else {
                console.log('Initializing DB');
                init();
                console.log('DB initialized');
            }
        }
    }).catch(err => console.log("errorErrorError ", err));

export default mongoose;