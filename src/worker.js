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
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 40px;
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
              <button onclick="sortTable('name')">Sort by Name</button>
              <button onclick="sortTable('department')">Sort by Department</button>

                <table class="searchable sortable">
                  <thead>
                    <tr>${headerRow}</tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
                <script>
                // Sorting function
                function sortTable(column) {
                    const table = document.getElementById('jsonTable');
                    const tbody = table.querySelector('tbody');
                    const rows = Array.from(tbody.getElementsByTagName('tr'));

                    // Sorting logic
                    rows.sort((a, b) => {
                    const aValue = a.cells[column].textContent.trim();
                    const bValue = b.cells[column].textContent.trim();
                    return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
                    });

                    // Clear the existing rows
                    tbody.innerHTML = '';

                    // Re-render the sorted rows in the tbody
                    rows.forEach(row => tbody.appendChild(row));

                    // Event listeners for sorting buttons
                    document.getElementById('sortByName').addEventListener('click', () => sortTable('name'));
                    document.getElementById('sortByDepartment').addEventListener('click', () => sortTable('department'));
                }
                </script>
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
