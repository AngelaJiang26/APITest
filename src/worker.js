//const { response } = require("express");

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
//const csv = ;
const myInfo = {
  "name": 'Buyun (Angela) Jiang',
  "homepage": 'https://www.linkedin.com/in/buyun-jiang/',
  "githubURL": 'https://github.com/AngelaJiang26/',
  "interestingFact": 'I speak 3 different languages and have drivers license from 4 different countries. I also love rockclimbing.',
  "skills": ['Java', 'Python', 'MySQL', 'C', 'React.js', 'Flask']
};

const defaultdata = `['name', 'department', 'salary', 'office', 'isManager', 'skill1', 'skill2', 'skill3']
['John', 'CDN', '80', 'Lisbon', 'FALSE', 'Caching', 'C++', 'AI']
['Jill', 'Developer Platform', '100', 'Austin', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Audrey Leblanc', 'Accounting', '154', 'Singapore', 'TRUE', 'HTML', 'CSS', 'Postgres']
['Braden McMahon', 'Bots', '219', 'San Francisco', 'TRUE', 'Distributed Systems', 'Rust', 'AI']
['Belen Norman', 'Developer Platform', '252', 'London', 'TRUE', 'HTML', 'Rust', 'GoLang']
['Aziel Gibson', 'CDN', '145', 'New York', 'TRUE', 'Caching', 'C++', 'AI']
['Eden Roy', 'Accounting', '190', 'Austin', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Marcelo Sullivan', 'Bots', '241', 'Singapore', 'FALSE', 'HTML', 'CSS', 'Postgres']
['Melanie Esparza', 'Developer Platform', '231', 'San Francisco', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Carl Nava', 'CDN', '230', 'London', 'FALSE', 'HTML', 'Rust', 'GoLang']
['Scout Hansen', 'Accounting', '259', 'New York', 'FALSE', 'Caching', 'C++', 'AI']
['Charlie West', 'Bots', '131', 'Lisbon', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Remi Hendrix', 'Developer Platform', '162', 'Austin', 'FALSE', 'HTML', 'CSS', 'Postgres']
['Korbyn Cuevas', 'CDN', '86', 'Singapore', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Adele Castillo', 'Accounting', '237', 'San Francisco', 'FALSE', 'HTML', 'Rust', 'GoLang']
['Kai Rojas', 'Bots', '102', 'London', 'FALSE', 'Caching', 'C++', 'AI']
['Adaline Murphy', 'Developer Platform', '238', 'New York', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Cameron Doyle', 'CDN', '81', 'Lisbon', 'FALSE', 'HTML', 'CSS', 'Postgres']
['Annalise Fuller', 'Accounting', '172', 'Austin', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Andre Spears', 'Bots', '106', 'Singapore', 'FALSE', 'HTML', 'Performance', 'GoLang']
['Isabela Casey', 'Developer Platform', '283', 'San Francisco', 'FALSE', 'Caching', 'C++', 'AI']
['Armando Trujillo', 'CDN', '178', 'London', 'FALSE', 'Typescript', 'CSS', 'GoLang']
['Danielle Adkins', 'Accounting', '89', 'New York', 'FALSE', 'HTML', 'Rust', 'Postgres']
['Kylo Hayes', 'Bots', '213', 'London', 'FALSE', 'Distributed Systems', 'Performance', 'AI']
['Iris Frye', 'Developer Platform', '212', 'New York', 'FALSE', 'HTML', 'C++', 'GoLang']
['Franco Short', 'CDN', '82', 'Lisbon', 'FALSE', 'Caching', 'CSS', 'AI']
['Cheyenne Fowler', 'Accounting', '150', 'Austin', 'FALSE', 'Typescript', 'Rust', 'GoLang']
['Kameron Colon', 'Bots', '149', 'Singapore', 'FALSE', 'HTML', 'Performance', 'Postgres']
['Remy Wang', 'Developer Platform', '94', 'San Francisco', 'FALSE', 'Distributed Systems', 'C++', 'AI']
['Cohen Dougherty', 'CDN', '157', 'London', 'FALSE', 'HTML', 'CSS', 'GoLang']
['Alisson Russell', 'Accounting', '214', 'New York', 'FALSE', 'Caching', 'Rust', 'AI']
['Weston McIntosh', 'Bots', '130', 'Lisbon', 'FALSE', 'Typescript', 'Performance', 'GoLang']
['Gwen Gutierrez', 'Developer Platform', '259', 'Austin', 'FALSE', 'HTML', 'C++', 'Postgres']
['Luca Acosta', 'CDN', '175', 'Singapore', 'FALSE', 'Distributed Systems', 'CSS', 'AI']
['Kaia Wyatt', 'Accounting', '112', 'San Francisco', 'FALSE', 'HTML', 'Rust', 'GoLang']
['Sam Hubbard', 'Bots', '87', 'London', 'FALSE', 'Caching', 'Performance', 'AI']
['Rosie Hull', 'Developer Platform', '227', 'New York', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Salem Foley', 'CDN', '290', 'London', 'FALSE', 'HTML', 'CSS', 'Postgres']
['Zaylee Blair', 'Accounting', '136', 'New York', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Troy Bartlett', 'Bots', '103', 'Lisbon', 'FALSE', 'HTML', 'Performance', 'GoLang']
['Aubrielle Collier', 'Developer Platform', '225', 'Austin', 'FALSE', 'Distributed Systems', 'C++', 'AI']
['Edison Hamilton', 'CDN', '267', 'Singapore', 'FALSE', 'HTML', 'CSS', 'GoLang']
['Mackenzie Gill', 'Accounting', '101', 'San Francisco', 'FALSE', 'Caching', 'Rust', 'Postgres']
['Matthias Greene', 'Bots', '288', 'London', 'FALSE', 'Typescript', 'Performance', 'AI']
['Selena Hutchinson', 'Developer Platform', '263', 'New York', 'FALSE', 'HTML', 'C++', 'GoLang']
['Korbin Francis', 'CDN', '108', 'Lisbon', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Daniella Noble', 'Accounting', '289', 'Austin', 'FALSE', 'HTML', 'Performance', 'GoLang']
['Idris Kent', 'Bots', '297', 'Singapore', 'FALSE', 'Caching', 'C++', 'Postgres']
['Jazmine Holt', 'Developer Platform', '139', 'San Francisco', 'FALSE', 'Typescript', 'Rust', 'AI']
['Niko Molina', 'CDN', '229', 'London', 'FALSE', 'HTML', 'Performance', 'GoLang']
['Alexandria Booth', 'Accounting', '156', 'New York', 'FALSE', 'Distributed Systems', 'C++', 'AI']
['Chaim Cisneros', 'Bots', '80', 'Austin', 'FALSE', 'Distributed Systems', 'Rust', 'GoLang']
['Janelle Hall', 'Developer Platform', '158', 'Singapore', 'FALSE', 'HTML', 'Performance', 'Postgres']
['Thomas Nixon', 'CDN', '201', 'San Francisco', 'FALSE', 'Caching', 'C++', 'AI']
['Deborah Taylor', 'Accounting', '186', 'London', 'FALSE', 'Typescript', 'Rust', 'GoLang']
['Jackson Parsons', 'Bots', '150', 'New York', 'FALSE', 'HTML', 'Performance', 'AI']
['Maia Blackburn', 'Developer Platform', '294', 'Austin', 'FALSE', 'Distributed Systems', 'C++', 'GoLang']
['Zahir Hartman', 'CDN', '106', 'Singapore', 'FALSE', 'HTML', 'Rust', 'Postgres']
['Kennedi Palacios', 'Accounting', '300', 'San Francisco', 'FALSE', 'Caching', 'Performance', 'AI']
['Thaddeus Dillon', 'Bots', '172', 'London', 'FALSE', 'Typescript', 'C++', 'GoLang']
['Laurel Moore', 'Developer Platform', '194', 'New York', 'FALSE', 'HTML', 'Rust', 'AI']
['Levi Rivers', 'CDN', '141', 'Austin', 'FALSE', 'Distributed Systems', 'Performance', 'GoLang']
['Kiana Ray', 'Accounting', '104', 'Austin', 'FALSE', 'Distributed Systems', 'C++', 'Postgres']
['Arlo Person', 'Bots', '203', 'Singapore', 'FALSE', 'HTML', 'Rust', 'AI']
['Dylan Evans', 'Developer Platform', '90', 'San Francisco', 'FALSE', 'Caching', 'Performance', 'GoLang']
['Elias Quintero', 'CDN', '215', 'London', 'FALSE', 'Typescript', 'C++', 'AI']
['Keyla Hurst', 'Accounting', '137', 'New York', 'FALSE', 'HTML', 'Rust', 'GoLang']
['Neil Carroll', 'Bots', '188', 'Austin', 'FALSE', 'Distributed Systems', 'Performance', 'Postgres']
['Zara Bradford', 'Developer Platform', '163', 'Austin', 'FALSE', 'HTML', 'C++', 'AI']
['Ander Quintero', 'CDN', '226', 'Singapore', 'FALSE', 'Caching', 'Rust', 'GoLang']
['Keyla Bravo', 'Accounting', '242', 'San Francisco', 'FALSE', 'Typescript', 'Performance', 'AI']
['Genesis Felix', 'Bots', '187', 'London', 'FALSE', 'HTML', 'C++', 'GoLang']
['Paisleigh Sherman', 'Developer Platform', '118', 'New York', 'FALSE', 'Distributed Systems', 'Rust', 'Postgres']
['Adan Sanford', 'CDN', '280', 'Austin', 'FALSE', 'Distributed Systems', 'Performance', 'AI']
['Emerald Macdonald', 'Accounting', '228', 'Austin', 'FALSE', 'HTML', 'C++', 'GoLang']
['Hugh Bowman', 'Bots', '139', 'Singapore', 'FALSE', 'Caching', 'Rust', 'AI']
['Fiona Robinson', 'Developer Platform', '300', 'San Francisco', 'FALSE', 'Typescript', 'Performance', 'GoLang']
['Matthew Christensen', 'CDN', '204', 'London', 'FALSE', 'HTML', 'C++', 'Postgres']
['Carmen McLaughlin', 'Accounting', '221', 'New York', 'FALSE', 'Distributed Systems', 'Rust', 'AI']
['Ibrahim Gould', 'Bots', '262', 'Austin', 'FALSE', 'HTML', 'Performance', 'GoLang']
['Violeta Cortes', 'Developer Platform', '98', 'Austin', 'FALSE', 'Caching', 'C++', 'AI']
['Banks Fitzpatrick', 'CDN', '250', 'Singapore', 'FALSE', 'Typescript', 'Rust', 'GoLang']
['Annabella Velasquez', 'Accounting', '172', 'San Francisco', 'FALSE', 'HTML', 'Performance', 'Postgres']
['Sullivan Nunez', 'Bots', '165', 'London', 'FALSE', 'Distributed Systems', 'C++', 'AI']
['Mya Hardy', 'Developer Platform', '127', 'New York', 'FALSE', 'Distributed Systems', 'Rust', 'GoLang']
['Jayceon Murillo', 'CDN', '128', 'Austin', 'FALSE', 'HTML', 'Performance', 'AI']
['Mikaela Hampton', 'Accounting', '89', 'Austin', 'FALSE', 'Caching', 'C++', 'GoLang']
['Hank Sandoval', 'Bots', '165', 'Singapore', 'FALSE', 'Typescript', 'Rust', 'Postgres']
['Elsie McCarthy', 'Developer Platform', '128', 'San Francisco', 'FALSE', 'HTML', 'Rust', 'AI']
['Devin Weber', 'CDN', '285', 'London', 'FALSE', 'Distributed Systems', 'Performance', 'GoLang']`

async function handleRequest(request) {
    // API Endpoint #1: GET /organization-chart
    if (request.method === 'GET' && new URL(request.url).pathname === '/organization-chart') {
        /*
        const ACCOUNT_ID = "012544cd5b8eee151cddddfb3957e644";
        const API_TOKEN = "hhc4dcLvXSJv64h-HcHyE1PuSYgCfjKusq4wOFFa";

        // Replace with your KV namespace ID (KID) and key
        const KID = "a69efbae24984a67aefe7e3f523cff37";
        const KEY = "here";

        // Construct the KV URL 
        const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${KID}/values/${KEY}`;
        // Make a request to Cloudflare API
        const response = await fetch(kvUrl, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            },});
        const data = await response.json();
        return new Response(data.result.value);

        */
        //const kv = await KVNamespace.create(kvNamespace);
        const key = "general_data";
        let value = await CloudFlareTest.get(key);
        /*
        if (value === null) {
            value = defaultdata;
            //return new Response("Value not found", {status: 404});
        }*/

        const valueArray = value
            .replace(/\[|\]/g, '') // remove []
            .replace(/'/g, '')     // remove ''
            .split('\n')           // split by new line
            .map(row => row.split(', ')); 

        const headers = valueArray[0];

        const jsonData = valueArray.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
        });

        function sort_by_department(jsonfile){
                const departmentMap = new Map();

                jsonfile.forEach(person =>{
                    const{name, department, salary, office, isManager, skill1, skill2, skill3} = {
                        ...person,
                        salary: Number(person.salary),
                        isManager: Boolean(person.isManager === 'TRUE'),
                    };

                    //add new if department does not exist in the map yet
                    if (!departmentMap.has(department)){
                        departmentMap.set(department, 
                            {
                                name: department,
                                managerName: null,
                                employees:[],
                            })
                    }

                    const currentDepartment = departmentMap.get(department);

                    if(isManager){
                        currentDepartment.managerName = name;
                    }

                    currentDepartment.employees.push(
                        {
                            name,
                            department, 
                            salary,
                            office,
                            isManager,
                            skills:[skill1, skill2, skill3],
                        })
                });

                const departments = Array.from(departmentMap.values());
                return {organization:{departments}};

        }

        const departments = sort_by_department(jsonData);

        const jsonResponse = new Response(JSON.stringify(departments, null, 2), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          });
        
        //const infoText = JSON.stringify(jsonResponse);
        return jsonResponse;
    } 

    // API Endpoint #2: GET /me
    if (request.method === 'GET' && new URL(request.url).pathname === '/me') {
        const infoText = JSON.stringify(myInfo, null, 2);
        return new Response(infoText,{
            headers: { 'Content-Type': 'application/json' },
          });
      } 

    
    // API Endpoint #3 POST /organization-chart
    if (request.method === 'POST' && request.url.endsWith('/organization-chart')) {
        const input = await request.text();
        const valueArray = input
            .replace(/\[|\]/g, '') // remove []
            .replace(/'/g, '')     // remove ''
            .split('\n')           // split by new line
            .map(row => row.split(', ')); 

        const headers = valueArray[0];

        const jsonData = valueArray.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
        });

        function sort_by_department(jsonfile){
                const departmentMap = new Map();

                jsonfile.forEach(person =>{
                    const{name, department, salary, office, isManager, skill1, skill2, skill3} = {
                        ...person,
                        salary: Number(person.salary),
                        isManager: Boolean(person.isManager === 'TRUE'),
                    };

                    //add new if department does not exist in the map yet
                    if (!departmentMap.has(department)){
                        departmentMap.set(department, 
                            {
                                name: department,
                                managerName: null,
                                employees:[],
                            })
                    }

                    const currentDepartment = departmentMap.get(department);

                    if(isManager){
                        currentDepartment.managerName = name;
                    }

                    currentDepartment.employees.push(
                        {
                            name,
                            department, 
                            salary,
                            office,
                            isManager,
                            skills:[skill1, skill2, skill3],
                        })
                });

                const departments = Array.from(departmentMap.values());
                return {organization:{departments}};

        }

        const departments = sort_by_department(jsonData);

        const jsonResponse = new Response(JSON.stringify(departments, null, 2), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          });
        
        //const infoText = JSON.stringify(jsonResponse);
        return jsonResponse;

    }

    // API Endpoint #4 POST /employee
    if (request.method === 'POST' && request.url.endsWith('/employee')) {
        const input = await request.json();

        const key = "general_data";
        let value = await CloudFlareTest.get(key);
/*
        if (value === null) {
            value = defaultdata;
            //return new Response("Value not found", {status: 404});
        }*/

        //process json data
        const valueArray = value
            .replace(/\[|\]/g, '') // remove []
            .replace(/'/g, '')     // remove ''
            .split('\n')           // split by new line
            .map(row => row.split(', ')); 
        
        const headers = valueArray[0];

        const jsonData = valueArray.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
        });

        
        function filterEmployees(jsonData, criteria) {
            const filteredEmployees = jsonData.filter(employee => {
                // Check each criteria if provided and match against the employee attributes
                return (!criteria.name || new RegExp(criteria.name, 'i').test(employee.name)) &&
                       (!criteria.department || new RegExp(criteria.department, 'i').test(employee.department)) &&
                       (!criteria.minSalary || Number(employee.salary) >= criteria.minSalary) &&
                       (!criteria.maxSalary || Number(employee.salary) <= criteria.maxSalary) &&
                       (!criteria.office || new RegExp(criteria.office, 'i').test(employee.office)) &&
                       (!criteria.skill || [employee.skill1, employee.skill2, employee.skill3].some(skill => new RegExp(criteria.skill, 'i').test(skill)));
              });
            
              // Format the response
              const employeeMap = new Map();
              filteredEmployees.forEach(person => {
                const{name, department, salary, office, isManager, skill1, skill2, skill3} = {
                    ...person,
                    salary: Number(person.salary),
                    isManager: Boolean(person.isManager === 'TRUE'),
                };
                employeeMap.set(name,
                    {
                        name: name,
                        department: department,
                        salary: salary,
                        office: office,
                        isManager: isManager,
                        skills:[skill1,skill2,skill3],
                    })
              });

                const temp = Array.from(employeeMap.values());
                const formattedResponse = {
                    employees:temp
                };       

              return formattedResponse;
            
        }

        const ret = filterEmployees(jsonData, input); 

        const jsonResponse = new Response(JSON.stringify(ret, null, 2), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          });
        return jsonResponse;
    }
    
    if (request.method === 'POST' && new URL(request.url).pathname === '/test'){
        const input = await request.json();
        const value = defaultdata;
        const valueArray = value
            .replace(/\[|\]/g, '') // remove []
            .replace(/'/g, '')     // remove ''
            .split('\n')           // split by new line
            .map(row => row.split(', ')); 
        
        const headers = valueArray[0];

        const jsonData = valueArray.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
        });

        const jsonResponse = new Response(JSON.stringify(jsonData, null, 2), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          });
        return jsonResponse;

    }



    else {
      return new Response('Not Found', { status: 404 });
    }
}
/*
// API Endpoint #2: GET /me
async function handleRequest(request) {
    if (request.method === 'GET' && new URL(request.url).pathname === '/me') {
      const infoText = JSON.stringify(myInfo);
      return new Response(infoText);
    } 
    else {
      return new Response('Not Found', { status: 404 });
    }
  }*/