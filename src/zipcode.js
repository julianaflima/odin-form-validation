import { showMessage } from "./delegate.js"

const zipcode = (() => {
	const getErrorMessage = (field) => {
		if (field.validity.tooShort) {
			const message = 'Zip code should be 4 numbers. Example: 1234';
			showMessage(field, message);
		} else if (field.validity.tooLong) {
			const message = 'Zip code should be 4 numbers. Example: 1234';
			showMessage(field, message);
		} else if (field.validity.patternMismatch) {
			const message = 'Zip code can only contain numbers. Example: 1234';
			showMessage(field, message);
		}
	};

	return {
		getErrorMessage,
	}
})();

export { zipcode }