import { IEmployee } from "./interfaces.js";

export const getEmployees = (): IEmployee[] => {
	return [
		{
			firstName: "Hans2"
		},
		{
			firstName: "Angela"
		}
	]
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