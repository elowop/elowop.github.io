import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import '../styling/breadblog.css'
import Entry from '../components/entry';
import breadblog_entries from '../data/breadblog_entry';

export class BreadBlog extends Component {

    render() {
        return(
            <Container fluid>
                <Row className="container-breadblog">
                    <Col md={6}>
                        <Row className="" style={{marginBottom: "2vh"}}>
                            <Link className="" to="/">{"return to home"}</Link>
                        </Row>
                        <Row>
                            <p style={{fontSize: "25px"}}>Just some reviews on bread I have been baking</p>
                        </Row>
                        <Row>
                            {breadblog_entries.entries.map((entry, index) => (
                                <Entry
                                    key={index}
                                    display_image={entry.image}
                                    title={entry.title}
                                    link={entry.link}
                                    rating={entry.rating}
                                    desc={entry.description}
                                />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}