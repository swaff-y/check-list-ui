import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function List({ type, data, callback }) {
  const handleClick = (value) => {
    callback(value);
  }
  return (
    <Table striped bordered hover>
      <thead>
        {
          type == 'List' ?
            <tr>
              <th>#</th>
              <th>List</th>
            </tr>
          :
          type == 'Reference' ?
            <tr>
              <th>#</th>
              <th>Reference</th>
            </tr>
          :
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
        }
      </thead>
      <tbody>
        {
          data.map((line, index) =>
            type == 'List' ?
              <tr key={index}>
                <td>{ index + 1 }</td>
                <td onClick={() => handleClick(line)}>{ line }</td>
              </tr>
            :
            type == 'Reference' ?
              <tr key={index}>
                <td>{ index + 1 }</td>
                <td>{ line?.ref }</td>
              </tr>
            :
            <tr key={index}>
              <td>{ index + 1 }</td>
              <td>{ line?.name }</td>
              <td>{ index + 1 }</td>
              <td>{ line?.name }</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default List;