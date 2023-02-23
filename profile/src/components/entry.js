import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/entry.css'
import link_icon from '../images/link_icon.png'


export default class Entry extends Component {

    render() {
        return(
            <Container fluid>
                <Row className="entry_container">
                    <Col className="img_container" md={3}>
                        <img class="img_sizing" src={this.props.display_image} alt="bread" />
                    </Col>
                    <Col>
                        <Row>
                            <span style={{padding: "0px", fontWeight:"bold"}}>
                                {this.props.title}
                                <a
                                    href={this.props.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img className="lang_icon" style={{marginLeft: "3px", marginBottom: "2px"}} src={link_icon} alt="link"/>
                                </a>
                            </span>
                        </Row>
                        <Row>
                            Rating: {this.props.rating}&nbsp;/ 10
                        </Row>
                        <Row>
                            <Row>
                                Notes and Observations:
                            </Row>
                            <Row>
                                <ul className="list">
                                    {this.props.desc.map(desc => (
                                        <li>{desc}</li>
                                    ))}
                                </ul>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}