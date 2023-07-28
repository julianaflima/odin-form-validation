const formHTML = `<form>
	<label for="email">Email:</label>
	<input type="email" id="email" name="emailId" pattern=".+@.+\..+" required>

	<label for="country">Country:</label>
	<input type="text" id="country" name="country" minlength="4" pattern="[a-zA-Z]{4,}" required>

	<label for="zipcode">Zip Code:</label>
	<input type="text" id="zipcode" name="zipcode" pattern="[0-9]{4}" minlength="4" maxlength="4" required>

	<label for="password">Password:</label>
	<input type="password" id="password" name="pwd" minlength="8" maxlength="27" required>

	<label for="confirmpwd">Confirm password:</label>
	<input type="password" id="confirmpwd" name="confirmpwd" required>

	<button>Submit</button>
</form>`;

export {
	formHTML,
}