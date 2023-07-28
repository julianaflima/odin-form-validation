// Calls all necessary function
import "./style.css";
import { formHTML } from "./form.js";
import { findInvalidField } from "./delegate.js";
import { password } from "./password.js";

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
		// console.log(field)
		field.addEventListener('input', (e) => {
			// set customError to false so it is not caught in the if condition
			field.setCustomValidity("");

			if (!field.validity.valid) {
				findInvalidField(field);
			} else if (field.name === 'confirmpwd') {
				password.confirmPwd(field);
				console.log('yay');
			} else {
				field.setCustomValidity("");
			}

		});
	});

	// Add event listeners for the submit button
	const submitBtn = document.querySelector('button');
	submitBtn.addEventListener('click', (e) => {
		// Default behavior is to submit the form
		e.preventDefault();
		
		// Show high 5 gif if all fields are valid
		// Check if one input is not valid
		const inputArray = Array.from(input);
		const isValid = (field) => {
			return field.validity.valid;
		};
		const allValid = inputArray.every(isValid);
		// const hasValue = (field) => {
		// 	return field.value
		// };
		// const allFilledOut = inputArray.every(hasValue);

		if (allValid) {
			container.innerHTML = 'yay high 5!'
		}


	});

})();