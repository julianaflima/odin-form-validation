// Calls all necessary function
import "./style.css";
import { formHTML } from "./form.js";
import { getMessage } from "./delegate.js";
// import { email } from "./email.js";

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
			// set customError to false so it is not caught in the if condition
			field.setCustomValidity("");

			if (!field.validity.valid) {
				getMessage(field);
			} else {
				field.setCustomValidity("");
			}

		});
	});

	// Add event listeners for the submit button

})();