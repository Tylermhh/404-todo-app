import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form } from "react-bootstrap";


function Main() {
    const navigate = useNavigate();
 
    return (
        <div className="App">
            <MainNav
                page = { "SignUp" }
            />
            <Container>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="signup-username">
                                <Form.Label>Username</Form.Label>
                                    <Form.Control   
                                        type="username"
                                        placeholder="Username"
                                        autoFocus
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="signup-password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    placeholder="Password"/>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>
                <Row>
                    <Button variant="primary" size="lg">
                        Block level button
                    </Button>
                </Row>
            </Container>
        </div>
    );
}
 
export default Main;