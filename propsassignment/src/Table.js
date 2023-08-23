// Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Institute</th>
          <th>Is Active</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.age}</td>
            <td>{item.institute}</td>
            <td>{item.isActive ? 'Yes' : 'No'}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
