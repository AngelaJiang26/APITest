// handleRequest.test.js

//const { handleRequest } = require('./src/worker.js');
const axios = require('axios');

describe('handleRequest', () => {
  test('handles valid POST request', async () => {
    /*const requestBody = {
      name: "^A",
      minSalary: 100,
      maxSalary: 200,
      office: null,
      skill: 'HTML',
    };*/

    const requestBody = `name,department,salary,office,isManager,skill1,skill2,skill3   
    John,CDN,80,Lisbon,FALSE,Caching,C++,AI
    Jill,Developer Platform,100,Austin,FALSE,Typescript,C++,GoLang   
    Audrey Leblanc,Accounting,154,Singapore,TRUE,HTML,CSS,Postgres 
    Braden McMahon,Bots,219,San Francisco,TRUE,Distributed Systems Rust,AI
    Belen Norman,Developer Platform,252,London,TRUE,HTML,Rust,GoLang   
    Aziel Gibson,CDN,145,New York,TRUE,Caching,C++,AI
    Eden Roy,Accounting,190,Austin,FALSE,Typescript,C++,GoLang   
    Marcelo Sullivan,Bots,241,Singapore,FALSE,HTML,CSS,Postgres 
    Melanie Esparza,Developer Platform,231,San Francisco FALSE,Distributed Systems Rust,AI`

    const response = await axios.post('http://localhost:51718/organization-chart', requestBody);
    /*const request = {
      method: 'POST',
      url: '/test',
      json: jest.fn().mockResolvedValue(requestBody),
    };

    const response = await handleRequest(request);*/

    // Log output for inspection
    console.log('Response Status:', response.status);
    console.log('Content-Type Header:', response.headers.get('Content-Type'));
    //const responseBody = await response.json();
    console.log('Response Body:', response.data);

    // Assertions start here
    /*expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    expect(responseBody.employees).toBeDefined();*/
    // Add more assertions as needed
  });

  /*
  test('handles invalid endpoint', async () => {
    const request = {
      method: 'POST',
      url: '/invalid-endpoint',
    };

    const response = await handleRequest(request);

    // Log output for inspection
    console.log('Response Status:', response.status);

    // Assertions start here
    expect(response.status).toBe(404);
    // Add more assertions as needed
  });*/

  // Add more test cases as needed
});
