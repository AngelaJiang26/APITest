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

    const requestBody = `
    'Violeta Cortes', 'Developer Platform', '98', 'Austin', 'FALSE', 'Caching', 'C++', 'AI'
    'Banks Fitzpatrick', 'CDN', '250', 'Singapore', 'FALSE', 'Typescript', 'Rust', 'GoLang'
    'Annabella Velasquez', 'Accounting', '172', 'San Francisco', 'FALSE', 'HTML', 'Performance', 'Postgres'
    'Sullivan Nunez', 'Bots', '165', 'London', 'FALSE', 'Distributed Systems', 'C++', 'AI'
    'Mya Hardy', 'Developer Platform', '127', 'New York', 'FALSE', 'Distributed Systems', 'Rust', 'GoLang'
    'Jayceon Murillo', 'CDN', '128', 'Austin', 'FALSE', 'HTML', 'Performance', 'AI'
    'Mikaela Hampton', 'Accounting', '89', 'Austin', 'FALSE', 'Caching', 'C++', 'GoLang'
    'Hank Sandoval', 'Bots', '165', 'Singapore', 'FALSE', 'Typescript', 'Rust', 'Postgres'
    `

    const response = await axios.post('http://localhost:52397/organization-chart', requestBody);
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
