//const { response } = require("express");
//import { OrgChartGenerate } from '../orgchart-graph/src/App.js';

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

async function handleRequest(request) {
    // API Endpoint #1: GET /organization-chart
    if (request.method === 'GET' && new URL(request.url).pathname === '/organization-chart') {
        
        const key = "general_data";
        let value = await CloudFlareTest.get(key);
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
        
        const value = await request.text();

        const valueArray = value
            .split('\n')           // split by new line
            .map(row => row.split(',')); 

        const headers = valueArray[0];

        const jsonData = valueArray.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
        });

        //const input = dvalue;

        /*const rows = value.trim().split('\n');
        const headerRow = rows[0];
        const indices = {};
          headerRow.split(/\s+/).forEach((field) => {
            const startIndex = headerRow.indexOf(field);
            indices[field] = startIndex;
          });
          

        // Extract values for each field in each row based on the header indices
        const jsonData = rows.slice(1).map(row => {

          return {
            name: row.slice(indices.name, indices.department).trim(),
            department: row.slice(indices.department, indices.salary).trim(),
            salary: row.slice(indices.salary, indices.office).trim(),
            office: row.slice(indices.office, indices.isManager).trim(),
            isManager: row.slice(indices.isManager, indices.skill1).trim(),
            skill1: row.slice(indices.skill1, indices.skill2).trim(),
            skill2: row.slice(indices.skill2, indices.skill3).trim(),
            skill3: row.slice(indices.skill3).trim(),
          };
        });*/




        function sort_by_department(jsonfile){
                const departmentMap = new Map();

                jsonfile.forEach(person =>{
                  const{name, department, salary, office, isManager, skill1, skill2, skill3} = {
                      ...person,
                      name: person.name.trim(),
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

    if (request.method === 'GET' && new URL(request.url).pathname === '/orgchart'){
        const key = "general_data";
        let value = await CloudFlareTest.get(key);

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

        /*const reactComponent = renderToHtml (<OrgChartGenerate/>);
        return new Response(reactComponent, {
            headers: { 'Content-Type': 'text/html' },
          });*/

        function generateHtmlTable(data) {
            // Generate table headers
            const headers = Object.keys(data[0]);
            const headerRow = headers.map((header) => `<th>${header}</th>`).join('');
          
            // Generate table rows
            const rows = data.map((item) => {
              const cells = headers.map((header) => `<td>${item[header]}</td>`).join('');
              return `<tr>${cells}</tr>`;
            }).join('');
          
            // Assemble the HTML table
            const htmlTable = `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <title>General Employee Information</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body, h1, table {
                    
                    margin: 40px;
                  }
                  h1 {
                    font-size: 28px;
                    margin-bottom: 10px;
                  }
                  h2 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }
                  table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: auto;
                  }
          
                  th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                  }
          
                  th {
                    background-color: #f2f2f2;
                  }
                </style>
              </head>
              <body>
                <h1>General Employee Information</h1>
                <h2>This chart has all the information as expanded. To see the interactive React file, open .. /orgchart-graph for react component as the react component I built did not seem to integrate to this worker.js file. In the React component, all columns can be sorted lexicographically when clicking on column title. </h2>
                <table class="searchable sortable">
                  <thead>
                    <tr>${headerRow}</tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
                
              </body>
              </html>
            `;
            return htmlTable;}
        const HTML_TEMPLATE = generateHtmlTable(jsonData);

        return new Response(HTML_TEMPLATE, {
            headers: { 'Content-Type': 'text/html' },
        });
    }

    else {
      return new Response('Not Found, please try GET /organization-chart, GET /me, POST /organization-chart, POST /employee, or GET /orgchart', { status: 404 });
    }
}
