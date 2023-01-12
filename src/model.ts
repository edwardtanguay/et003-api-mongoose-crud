import { IEmployee } from "./interfaces.js";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";

export const getEmployees = async () => {
	const employees = await Employee.find().select('firstName lastName title notes') ;
	if (employees.length === 0) {
		throw new Error('there is no data');
	}
	return employees;
}

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
	a {
		color: yellow;
	}
</style>
<h1>Book Site API</h1>
<ul>
	<li><a href="employees">/employees</a> - get all employees</li>
</ul>
	`;
}