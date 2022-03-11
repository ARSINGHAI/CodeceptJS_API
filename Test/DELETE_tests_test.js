Feature('GET tests');
const FormData = require('form-data');
const fs = require('fs');
let form = new FormData();

Scenario('Sending DELETE request and checking response 204', ({ I }) => 
{
    
    I.sendDeleteRequest('https://reqres.in/api/users/2');
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(status).to.eql(204);
      });
})
