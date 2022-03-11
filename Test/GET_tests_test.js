Feature('GET tests');

Scenario('Checks that the response code is 2xx', ({ I }) => 
{
    //validating response code
    I.sendGetRequest('api/users?page=2');
    I.seeResponseCodeIsSuccessful();
    
}),

Scenario('Checks for deep inclusion of a provided json in a response data', ({ I }) => 
{
    I.sendGetRequest('api/users?page=2');
    I.seeResponseContainsKeys(['page','per_page','data']);
    I.seeResponseContainsJson({"data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]} 
        );
})
Scenario('Executes a callback function passing in response object', ({ I }) => 
{
    I.sendGetRequest('api/users?page=2');
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(200);
      });
})

Scenario('validating response JSON schema', ({ I }) => 
{
  
    I.sendGetRequest('https://reqres.in/api/users/2');
    const joi = require('joi');
    //joi lets you describe your data using a simple, intuitive, and readable language.
    I.seeResponseMatchesJsonSchema(joi.object({
      data : joi.object({
        id: joi.number(),
        email : joi.string(),
        first_name: joi.string(),
        last_name: joi.string(),
        avatar: joi.string(),
      }),
      support : joi.object({
        url: joi.string(),
        text: joi.string(),
      })
      
    }))

})
    
    

