import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ type, data, callback }) {
  const [tick] = useState('&#9989;')
  const [cross] = useState('&#10060;')

  const handleClick = (value) => {
    callback(value);
  }

  return (
    <Table bordered>
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
              <th>SubTasks</th>
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
                <td onClick={() => handleClick(line)}>{ line?.ref }</td>
              </tr>
            :
            <tr key={index}>
              <td>{ index + 1 }</td>
              <td>{ line?.name }</td>
              <td>
                <ListGroup>
                  {
                    line?.subTasks?.map((task,index)=>
                      <ListGroup.Item
                        key={index}
                        variant={
                          task?.status == 'y' 
                          ? 
                          'success' 
                          : 
                          'danger'
                        }
                        style={{
                          display:'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        {
                          <span>{task?.name}</span>
                        } {
                          <span>{task?.time}</span>
                        }
                      </ListGroup.Item>
                    )
                  }
                </ListGroup>
              </td>
              <td 
                style={{
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    marginTop: '28px'
                  }}
                >
                  { 
                    line?.status == 'y' 
                    ?
                    "\u2705"
                    :
                    "\u274C"
                  }
                </div>
              </td>

              <td style={{textAlign:'center'}}>{ line?.time }</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default List;