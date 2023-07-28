import { showMessage } from "./delegate.js"

const country = (() => {
	const getErrorMessage = (field) => {
		if (field.validity.tooShort) {
			const message = `Country name is too short (${field.value.length} characters). It should be at least 4 letters.`;
			showMessage(field, message);
		}
	};

	return {
		getErrorMessage,
	}
})();

export { country }