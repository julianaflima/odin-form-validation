import { email } from "./email.js"

function getMessage(field) {
	const name = field.name;
	switch (name) {
		case 'emailId':
			if (field.validity.typeMismatch){
				email.mismatch(name);
			}
			break;
		case 'country':
			if (field.validity.tooShort) {
				console.log('country name too short')
			} else if (field.validity.patternMismatch) {
				console.log('country name can only contain letters');
			}
			break;
		case 'zipcode':
			if (field.validity.tooShort) {
				console.log('zip code too short');
			} else if (field.validity.tooLong) {
				console.log('zip code too long');
			} else if (field.validity.patternMismatch) {
				console.log('zip code can only contain numbers')
			}
			break;
		case 'pwd':
			if (field.validity.tooShort) {
				console.log('password too short')
			} else if (field.validity.tooLong) {
				console.log('password too long');
			} else {
				// check for pattern mismatch
			}
			break;
		case 'confirmpwd':
			// check if this matches password
			break;
	}

}


export { getMessage }
