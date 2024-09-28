import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Usertable() {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/finddata')
      .then(
        res => {
          console.log(res.data)
          setdata(res.data.data)
        }
      )
      .catch(error => {
        console.log(error)
      })
  }, [])

 

  function handeledelete(fname){
    axios.delete(`http://localhost:8000/finddata/deleteuser/${fname}`)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((a) => {
            return (
              <>

                <tr>
                  <td>{a.roll_no}</td>
                  <td>{a.fname}</td>
                  <td>{a.lname}</td>
                  <td><Button variant="primary">Update</Button>{' '}</td>
                  <td><Button variant="danger">Delete</Button>{' '}</td>
                </tr></>
            )
          })
        }

      </tbody>
    </Table>
  );
}


export default Usertable