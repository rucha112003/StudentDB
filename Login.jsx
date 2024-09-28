import axios from 'axios';
import { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [fname, setFname] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:8000/login", { fname });

      if (response.status === 200) {
        if (response.data) {
          navigate('/usertable');
        } else {
          alert('Invalid response data');
        }
      } else {
        alert(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <Container className='justify-content-center'>
      <Col md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your fname with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default Login;
