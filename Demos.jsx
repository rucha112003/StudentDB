import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Demos = () => {

    const navigate = useNavigate()


    const [data, setdata] = useState([])
    useEffect(() => {
 
         fetchData()
    }, [])

    const fetchData = async ()=>{
        try {       
            const responce = await axios.get("http://localhost:8000/finddata")
            setdata(responce.data.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    const updatedata=(fname)=>{

        navigate('/update');
            localStorage.setItem('usefname',fname)
    }

    const handledelete = (fname)=>{
        axios.delete(`http://localhost:8000/deleteuser/${fname}`)
        .then( setdata(prevData => prevData.filter(item => item.fname !== fname)))
        .catch((err)=>console.log(err))
    }


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Roll_no</th>
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
                                        <td>  <Button variant="primary" onClick={()=>updatedata(a.fname)}>Update</Button></td>
                                        <th>  <Button variant="danger" onClick={()=>handledelete(a.fname)}>Delete</Button></th>
                                    </tr>
                                </>
                            )
                        })
                    }


                </tbody>
            </Table></>
    )
}

export default Demos

