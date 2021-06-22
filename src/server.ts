import express from 'express';
import env from './config/environments'

const { host } = env

const app = express();

app.listen(host.port, () => {
    console.log(`Server init on port ${host.port}`);
});