Feature('GET tests');
const FormData = require('form-data');
const fs = require('fs');
let form = new FormData();

Scenario('Sending POST request and checking response 200', ({ I }) => 
{
    
    I.sendPostRequest('https://reqres.in/api/users' , { "name": "morpheus" , "job" : "leader"} );
    I.seeResponseCodeIsSuccessful();
    
})
Scenario('Sending POST request and checking response data' , async ({ I }) => 
{
    userData = {
        email: "eve.holt@reqres.in",
        password: "pistol"
    }
    
    await I.sendPostRequest('https://reqres.in/api/register' , userData );
    I.seeResponseContainsJson({
        "id": 4,
        "token": "QpwL5tke4Pnpja7X4"
    })
}),

Scenario('Verify uploading a file', async ({ I }) => {
	form.append('attachment', fs.createReadStream('test/test.png'));

	await I.sendPostRequest('https://httpbin.org/post', form);
	await I.seeResponseCodeIsSuccessful();
});


