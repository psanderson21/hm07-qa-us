// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyCreateTestKit = {
	"name": "Test Kit",
	"cardId": 1
}

const requestBody = {
	"productsList": [
	  {
		"id": 2,
		"quantity": 1
	  }
	],
	"name": "Modified Test Kit"
  }

test('Should return 200 status code....', async () => {
	let postResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`,{
			method:'POST',
			headers:{
				'Content-type':'application/json'
			},
			body:JSON.stringify(requestBodyCreateTestKit)
		});
		postResponseBody = await response.json();
	}  catch(error) {
		console.error(error);
	}
	
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers:{
				'Content-type':'application/json'
			},
			body:JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Body should contain....', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		postResponseBody = await response.json();
		actualResponseBody = postResponseBody.ok;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toBe(true);
});
