import Table from 'react-bootstrap/Table';

function List() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Development</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Code Review</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default List;