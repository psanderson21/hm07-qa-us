// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyCreateTestKit = {
	"name": "Test Kit",
	"cardId": 1
}

test('Status code should be 200', async () => {
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
	expect(postResponseBody.name).toBe("Test Kit");

	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE'
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Response body should delete kit', async () => {

	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE'
		});
		postResponseBody = await response.json();
		actualResponseBody = postResponseBody.ok;
	} catch(error) {
		console.error(error);
	}
	expect(actualResponseBody).toBe(true);
});