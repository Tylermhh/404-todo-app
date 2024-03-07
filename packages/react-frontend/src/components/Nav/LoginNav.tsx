import React from 'react'
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import { Button, Container, Col, Row, Nav, Navbar } from 'react-bootstrap';
import * as data from './links.json'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string
}

const Links: React.FC<{ links : Link[] }> =({ links }) => {
    return (
        <div className = {styles['links-container']}>
            {links.map((link : Link) => {
                return (
                    <div className = {styles['links']}>
                        <Nav.Item>
                            <Nav.Link href={link.href}>
                                {link.label}
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                )
            })}
        </div>
    )
}

const LandingNav: React.FC<{}> = () => {    
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div className = {styles['logo-container']}>
                    <a className="navbar-brand" href="/">
                        TaskCraft
                    </a>
                </div>
                <Row>
                    <Col sm={7}>
                        <Button href={"/signup"}>
                            Sign Up
                        </Button>
                    </Col>
                    <Col sm={5}>
                        <Button href={"/auth"}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default LandingNav