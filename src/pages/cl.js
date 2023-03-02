import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import cl from '../images/cl.pdf';
import "../styling/cl.css"

export class CL extends Component {

    render() {
        return(
            <Container fluid>
                <Row className="container-cl">
                    <Col md={6}>
                        <Row className="" style={{marginBottom: "2vh", marginLeft: "2px"}}>
                            <Link className="" to="/">{"return to home"}</Link>
                        </Row>
                        <Row>
                            <iframe className="frame" src={cl}/>
                        </Row>
                        <Row className="" style={{marginBottom: "2vh", marginLeft: "2px"}}>
                            <Link className="" to="/">{"return to home"}</Link>
                        </Row>
                    </Col>           
                </Row>
            </Container>
        );
    }
}