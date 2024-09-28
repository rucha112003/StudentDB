import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Update() {
  const [validated, setValidated] = useState(false);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [roll_no, setroll_no] = useState('');

  const abc = localStorage.getItem('usefname');

  useEffect(() => {
    setfname(abc);
  }, [abc]); // Update fname whenever abc changes

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const mydata = {
      fname: fname,
      lname: lname,
      roll_no: roll_no,
    };

    axios
      .put(`http://localhost:8000/updatedata/${abc}`, mydata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Rollno</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Roll number"
              aria-describedby="inputGroupPrepend"
              value={roll_no}
              onChange={(e) => setroll_no(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default Update;
