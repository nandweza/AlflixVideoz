import React from 'react'

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>title</th>
          <th>genre</th>
          <th>narration</th>
          <th>type</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.narration}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
