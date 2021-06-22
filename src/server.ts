import 'reflect-metadata';
import './database'

import express from 'express';
import { router } from 'routes'

import env from 'config/environments'
const { host } = env

const app = express();

app.use(router)

app.listen(host.port, () => {
    console.log(`Server init on port ${host.port}`);
});

export default app