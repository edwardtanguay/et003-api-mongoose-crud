import * as model from './model.js';
import express from 'express';
import cors from 'cors';
import * as config from './config.js';
import mongoose from 'mongoose';
import { IEmployee } from './interfaces.js';

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost/northwind');

const app = express();
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(model.getApiInstructions());
});

app.get('/employees', async (req: express.Request, res: express.Response) => {
	const employees: IEmployee[] = await model.getEmployees();
	res.json(employees);
});

app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});