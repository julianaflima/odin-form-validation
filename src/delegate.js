import { email } from "./email.js";
import { country } from "./country.js";
import { zipcode } from "./zipcode.js";
import { password } from "./password.js";

function findInvalidField(field) {
	const name = field.name;
	switch (name) {
		case 'emailId':
			email.getErrorMessage(field);
			break;
		case 'country':
			country.getErrorMessage(field);
			break;
		case 'zipcode':
			zipcode.getErrorMessage(field);
			break;
		case 'pwd':
			password.getErrorMessage(field);
			break;
	}
}

function showMessage(field, message) {
	field.setCustomValidity(message);
	field.reportValidity();
}


export { findInvalidField, showMessage }
