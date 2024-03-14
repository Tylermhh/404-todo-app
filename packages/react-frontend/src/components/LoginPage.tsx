import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import { loginUser } from '../api/AuthHooks';

function Main() {
  const [username, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { ok, data, error } = await loginUser(username, pwd);
      if (ok) {
        console.log('Login successful', data); // Optionally log or use the data
        navigate('/home'); // Redirect to home on successful login
      } else {
        // Use the custom error message if provided by loginUser
        throw new Error(error || 'Login failed');
      }
    } catch (error) {
      // Log the error message, falling back to a generic message if necessary
      console.error('Login failed', error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };


    return (
      <div className="App">
        <MainNav page="Login" />
        <Stack gap={5}>
          <Container /> 
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={12} md={6}>
                {" "}
                {/* Adjust the column sizing as needed */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="login-username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      autoFocus
                      value={username}
                      onChange={e => setUsername(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pwd}
                      onChange={e => setPassword(e.target.value)} 
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Button variant="primary" size="lg" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Stack>
      </div>
    );
}
 
export default Main;
