

export function alertMessages()  {
  const messages = {
		withdrawal: {
			type: 'warning',
			message: 'This is a default warning'
		},
		deposit: {
			type: 'info',
			message: 'This is a general information for the user'
		},
		registration: {
			type: 'error',
			message: 'invalid login details'
		},
		login: {
			type: 'info',
			message: 'User successfully logged in'
		}
  }
  return messages;
}


