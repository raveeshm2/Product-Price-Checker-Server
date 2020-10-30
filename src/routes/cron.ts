import express from 'express';
import { userModel } from '../db/models';
import cron from 'node-cron';
import { enableCronJob } from '../common/cron';

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
            expression = '* */1 * * *';
            break;
        case '2hr':
            expression = '* */2 * * *';
            break;
        case '4hr':
            expression = '* */4 * * *';
            break;
        case '6hr':
            expression = '* */6 * * *';
            break;
        case '8hr':
            expression = '* */8 * * *';
        case '12hr':
            expression = '* */12 * * *';
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
        await user!.save();
    }
    cronGlobal = enableCronJob(expression);
    if (restarted) {
        return res.send({ message: 'CRON job restarted successfully ' + expression });
    } else {
        return res.send({ message: 'CRON job started successfully ' + expression });
    }
});

router.post('/stop', (req, res, next) => {
    if (!cronGlobal)
        throw new Error('Cron Job is not running');
    cronGlobal.destroy();
    cronGlobal = null;
    return res.send({ message: 'CRON job stopped successfully' });
});

// Get status of currently running cron job
router.get('/status', async (req, res, next) => {
    const status = cronGlobal?.getStatus ? "Running" : 'Not running';
    const user = await userModel.findOne({});
    const email = user!.email;
    return res.send({ status, email });
});

export default router;