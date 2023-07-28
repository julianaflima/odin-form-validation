import { showMessage } from "./delegate.js"

const email = (() => {
	const getErrorMessage = (field) => {
		if (field.validity.typeMismatch) {
			const message = 'Please write an email address';
			showMessage(field, message);
		}
	};
	
	return {
		getErrorMessage,
	}
})();

export { email }