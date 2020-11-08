import mongoose from 'mongoose';
import { checkForCronJobs, init } from "../common/util";

console.log('Connecting to mongo db');
mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
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
        } else {
            checkForCronJobs();
        }
    }).catch(err => console.log("errorErrorError ", err));

export default mongoose;