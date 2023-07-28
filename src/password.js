import { showMessage } from "./delegate.js"

const password = (() => {
	const getErrorMessage = (field) => {
		if (field.validity.tooShort) {
			// console.log(field.value.length);
			const message = `Your password is too short (${field.value.length} characters). It should be at least 8 characters with at least 1 lower case letter, 1 uppercase letter, 1 number, 1 special character ( !@#$ )`;
			showMessage(field, message);
		} else if (field.validity.tooLong) {
			const message = 'Password is too long. It should be at most 27 characters and at least 1 lower case letter, 1 uppercase letter, 1 number, 1 special character ( !@#$ ).'
			showMessage(field, message);
			// console.log('password too long');
		} else {
			// check for pattern mismatch
			showMessage(field, 'else');
		}
	};

	// check confirmpwd field is equal to pwd field
	const confirmPwd = (field) => {
		const confirmedPwd = field.value;
		const originalPwd = document.querySelector('#password').value;
		if (confirmedPwd !== originalPwd) {
			const message = 'Passwords do not match.';
			showMessage(field, message);
		}
	};

	return {
		getErrorMessage,
		confirmPwd,
	}
})();


export { password }