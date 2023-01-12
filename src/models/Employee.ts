import {Schema, model} from 'mongoose';
import { IEmployee } from '../interfaces.js';

const employeeSchema = new Schema<IEmployee>({
	firstName: String,
	lastName: String,
	title: String,
	notes: String
});

export const Employee = model('employee', employeeSchema);