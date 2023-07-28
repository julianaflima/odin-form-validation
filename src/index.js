// Calls all necessary function
import "./style.css";
import { formHTML } from "./form.js";
import { delegate } from "./delegate.js";
import { email } from "./email.js";

//Immediately Invoked Function
(() => {

	// Add html form
	const container = document.createElement('div');
	container.classList.add('container');
	container.innerHTML = formHTML;
	document.body.appendChild(container);

	// Add event listeners for the input
	const input = document.querySelectorAll('input');
	input.forEach((field) => {
		field.addEventListener('input', (e) => {
			// if (field.validity.typeMismatch) {
			// 	console.log(field.id);
			// 	delegate(field);
			// 	// if (field.id === "email")
			// 	// {
			// 	// 	console.log(field.id);
			// 	// }
			// } else if (field.validity.tooShort) {
			// 	console.log('tooShort');
			// } else if (field.validity.tooLong) {
			// 	console.log('too long');
			// } else if (field.validity.patternMismatch) {
			// 	console.log('pattern mismatch');

			// set customError to false so it is not caught in the if condition
			field.setCustomValidity("");

			if (!field.validity.valid) {
				console.log(field.validity);
				console.log(field.validity.valid);
				delegate(field);
			} else {
				field.setCustomValidity("");
				// field.reportValidity();
			}

		});
	});

	// Add event listeners for the submit button

})();