// SortableTable.js
import React, { useState, useEffect } from 'react';

const SortableTable = ({ dataString }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Parse the data string into an array of objects
        const rows = dataString.split('\n').map((rowString) => {
        const rowValues = rowString.split(', ');
        return {
            name: rowValues[0],
            department: rowValues[1],
            salary: rowValues[2],
            office: rowValues[3],
            isManager: rowValues[4],
            skill1: rowValues[5],
            skill2: rowValues[6],
            skill3: rowValues[7],
        };
        });

        setData(rows);
    }, [dataString]);


    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (key === sortKey) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
        // If sorting by a new key, set the key and order
        setSortKey(key);
        setSortOrder('asc');
        }
    };

    const sortedData = [...data].sort((a, b) => {

        let aValue = a[sortKey];
        let bValue = b[sortKey];

        //console.log(typeof aValue);

        // Check if either value is undefined before comparison
        if (aValue === undefined) {
        aValue = '';
        }
        if (bValue === undefined) {
        bValue = '';
        }
/*
        if (sortKey === 'salary') {
        return sortOrder === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
        }*/

        // Use custom comparison logic if not salary
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    return (
        <table>
        <thead>
            <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('department')}>Department</th>
            <th onClick={() => handleSort('salary')}>Salary</th>
            <th onClick={() => handleSort('office')}>Office</th>
            <th onClick={() => handleSort('isManager')}>Manager</th>
            <th onClick={() => handleSort('skill1')}>Skill 1</th>
            <th onClick={() => handleSort('skill2')}>Skill 2</th>
            <th onClick={() => handleSort('skill3')}>Skill 3</th>
            </tr>
        </thead>
        <tbody>
            {sortedData.map((row, index) => (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.department}</td>
                <td>{row.salary}</td>
                <td>{row.office}</td>
                <td>{row.isManager}</td>
                <td>{row.skill1}</td>
                <td>{row.skill2}</td>
                <td>{row.skill3}</td>
            </tr>
            ))}
        </tbody>
        </table>
  );
};

export default SortableTable;
