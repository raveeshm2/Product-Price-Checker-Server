import express from 'express';
import { userModel } from '../db/models';
import cron from 'node-cron';
import { enableCronJob } from '../common/cron';
import { frequencyToTextMapper, startKeepAlive, timeOut } from '../common/util';

let intervalID: NodeJS.Timeout | null = null;

const router = express.Router();

let cronGlobal: cron.ScheduledTask | null = null;

router.post('/start', async (req, res, next) => {
    let restarted = false;
    let expression: string;
    switch (req.body.hour) {
        case "15min":
            expression = '*/15 * * * *';
            break;
        case '30min':
            expression = '*/30 * * * *';
            break;
        case '1hr':
            expression = '0 */1 * * *';
            break;
        case '2hr':
            expression = '0 */2 * * *';
            break;
        case '4hr':
            expression = '0 */4 * * *';
            break;
        case '6hr':
            expression = '0 */6 * * *';
            break;
        case '8hr':
            expression = '0 */8 * * *';
            break;
        case '12hr':
            expression = '0 */12 * * *';
            break;
        case '1day':
            expression = '30 11 */1 * *';
            break;
        case '1week':
            expression = '30 11 */7 * *';
            break;
        case '1month':
            expression = '30 11 15 */1 *'; // Run on 15th of every month at 11:30AM
            break;
        default:
            expression = '30 11 */1 * *'; // By default run once every day at 11:30AM
    }
    if (cronGlobal) {
        restarted = true;
        cronGlobal.destroy();
    }
    const email = req.body.email;
    if (email) {
        const user = await userModel.findOne({});
        user!.email = email;
        user!.cron = expression;
        await user!.save();
    }
    cronGlobal = enableCronJob(expression);
    await timeOut();

    // Ping Heroku server every 20 mins to avoid sleeping of heroku app
    if (process.env.NODE_ENV === "production" && intervalID === null) {
        intervalID = startKeepAlive();
    }

    if (restarted) {
        return res.send({ message: ['CRON job restarted successfully '] });
    } else {
        return res.send({ message: ['CRON job started successfully '] });
    }
});

router.post('/stop', async (req, res, next) => {
    if (!cronGlobal)
        return next(new Error('Cron Job is not running'));
    cronGlobal.destroy();
    cronGlobal = null;
    const user = await userModel.findOne({});
    user!.cron = undefined;
    await user?.save();
    await timeOut();
    if (intervalID)
        clearInterval(intervalID);
    intervalID = null;
    return res.send({ message: ['CRON job stopped successfully'] });
});

// Get status of currently running cron job
router.get('/status', async (req, res, next) => {
    const status = cronGlobal?.getStatus ? "Running" : 'Not running';
    const user = await userModel.findOne({});
    const email = user!.email;
    await timeOut();
    if (status === "Running" && user?.cron) {
        return res.send({ status, cronFrequency: frequencyToTextMapper(user.cron), email });
    } else {
        return res.send({ status, cronFrequency: undefined, email });
    }
});

// Runs cron jobs after waking up from sleep state
export async function checkForCronJobs() {
    const user = await userModel.findOne({});
    if (user && user.cron) {
        console.log("Restarting CRON job");
        cronGlobal = enableCronJob(user.cron);
        // Ping Heroku server every 20 mins to avoid sleeping of heroku app
        if (process.env.NODE_ENV === "production" && intervalID === null) {
            intervalID = startKeepAlive();
        }
    }
}

export default router;