import { IEmployee } from "./interfaces.js";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";

export const getEmployees = async () => {
	const employees = await Employee.find().select('firstName lastName title notes');
	if (employees.length === 0) {
		throw new Error('there is no data');
	}
	return employees;
}

export const addEmployee = async (employeeData: IEmployee) => {
	return new Promise(async (resolve, reject) => {
		try {
			const employee = new Employee(employeeData);
			const addedEmployee = await employee.save();
			resolve({
				status: "success",
				newId: addedEmployee._id
			})
		}
		catch (e) {
			reject(e);
		}
	})
}

export const deleteEmployee = async (id: string) => {
	return new Promise(async (resolve, reject) => {
		try {
			const employee = await Employee.find({ id });
			const result = await Employee.deleteOne({ _id: id });
			if (result.deletedCount === 1) {
				resolve({
					status: "success",
					message: `item with id "${id}" was deleted`
				})
			} else {
				reject({
					status: "error",
					message: `item with id "${id}" was not deleted`
				})
			}
		}
		catch (e) {
			reject(e);
		}
	})
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