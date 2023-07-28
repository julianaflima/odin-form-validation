const email = (() => {
	const mismatch = () => {
		const email = document.querySelector('[name="emailId"]')
		email.setCustomValidity('Please write an email address.')
		email.reportValidity();
	}
	return {
		mismatch,
	}
})();

export { email }