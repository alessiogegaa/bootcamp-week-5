import React from 'react';
import './Table.css'; 

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Language</th>
            <th>Private</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => ( 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.full_name}</td>
              <td>{item.language}</td>
              <td>{item.private ? 'Yes' : 'No'}</td>
              <td>{new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
