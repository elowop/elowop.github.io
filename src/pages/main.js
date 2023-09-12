import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/main.css';
import Av from '../images/av.png'; 
import { Link } from "react-router-dom";
import Resume from '../images/3B Resume.pdf';
import Typewriter from 'typewriter-effect';
import Python_logo from '../images/python_logo.png';
import Docker_logo from '../images/docker_logo.png';
import SQL_logo from '../images/sql_logo.png';
import Jenkins_logo from '../images/jenkins_logo.png';
import Java_logo from '../images/java_logo.png';
import Mongo_logo from '../images/mongo_logo.png';
import react_logo from '../images/react_logo.png';
import redux_logo from '../images/redux_logo.png';
import js_logo from '../images/js_logo.png';
import git_logo from '../images/git_logo.png';
import github_logo from '../images/github_logo.png';
import linkedin_logo from '../images/linkedin_logo.png';
import Email_logo from '../images/email_logo.png';
import Kotlin_logo from '../images/kotlin_logo.png'

export default class Main extends Component {

    render() {
        return(
            <Container fluid>
                <Row className="container-main">
                    <Col md={5}>
                        <Row className="title_row">
                            <Col className="profile" md={4}>
                                <img src={Av} alt="profile" class="img-fluid"/> 
                            </Col>
                            <Col>
                                <Row>
                                    <Col className="name">
                                        Hi. I'm Andrew
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typewriter
                                            options={{
                                                delay: 50,
                                                deleteSpeed: 30
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter.typeString('I\'m a student')
                                                .pauseFor(300)
                                                .deleteChars(7)
                                                typewriter.typeString('coffee fanatic')
                                                .pauseFor(300)
                                                .deleteChars(14)
                                                typewriter.typeString('city explorer')
                                                .pauseFor(300)
                                                .deleteChars(13)
                                                typewriter.typeString('software engineer')
                                                .pauseFor(500)
                                                typewriter.typeString(', most of the time')
                                                .start();
                                        }}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="icon_bar">
                                        <div className="socials">
                                            <a
                                                href="https://www.linkedin.com/in/andrew-yiwen-xu/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img className="lang_icon" style={{animationDelay: "0.2s"}} alt="linkedin" src={linkedin_logo}/>
                                            </a>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="https://github.com/elowop"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img className="lang_icon" style={{animationDelay: "0.7s"}} alt="github" src={github_logo}/>
                                            </a>
                                        </div>
                                        <div className="socials">
                                            <a
                                                href="mailto:ay6xu@uwaterloo.ca"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img className="lang_icon" style={{animationDelay: "1.2s"}} alt="email" src={Email_logo}/>
                                            </a>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="info-rows">
                            <Row>
                                Currently, I am...
                                {/* <p>Recently, I have...</p> */}
                            </Row>
                            <Row className="list">
                                <ul>
                                    <li>Working at <a className="highlight" href="https://www.intuit.com/ca/" target="_blank" rel="noopener noreferrer">
                                        Intuit</a> as a Software Engineer on the backend for Dev Tools
                                    </li>
                                    <li>A 3rd year student studying <span className="highlight">Computational Mathematics</span> 
                                    &nbsp;at the <span className="highlight">University of Waterloo</span></li>
                                </ul>
                            </Row>
                        </Row>
                        <Row className="info-rows">
                            <Row>
                                Previously, I have worked...
                            </Row>
                            <Row className="list">
                                <ul>
                                    <li>
                                        As a software engineer at <a className="highlight" href="https://www.achievers.com/" target="_blank" rel="noopener noreferrer">Achievers Inc</a>'s 
                                        Binary Experience department helping develop platform notifications
                                    </li>
                                    <div className="icon_bar">
                                        <img className="lang_icon" alt="python" src={Python_logo}/> 
                                        <img className="lang_icon" alt="docker" src={Docker_logo}/>
                                        <img className="lang_icon" alt="sql" src={SQL_logo}/>
                                        <img className="lang_icon" alt="jenkins" src={Jenkins_logo}/>
                                        <img className="lang_icon" alt="js" src={js_logo}/>
                                        <img className="lang_icon" alt="git" src={git_logo}/>
                                    </div>
                                    <li>
                                        As a mobile developer at <a className="highlight" href="https://www.favoritemedium.com/" target="_blank" rel="noopener noreferrer">Favorite Medium Inc</a>
                                        working on the mobile app TuneIn with Kotlin
                                    </li>
                                    <div className="icon_bar">
                                        <img className="lang_icon" alt="python" src={Kotlin_logo}/> 
                                    </div>
                                    <li>
                                        As a full-stack developer at <span className="highlight">Exponet Cananda Inc</span> creating a logistics management application
                                    </li>
                                    <div className="icon_bar">
                                        <img className="lang_icon" alt="java" src={Java_logo}/>
                                        <img className="lang_icon" alt="mongo" src={Mongo_logo}/>
                                        <img className="lang_icon" alt="js" src={js_logo}/>
                                        <img className="lang_icon" alt="git" src={git_logo}/>
                                    </div>
                                </ul>
                            </Row>
                        </Row>
                        <Row className="info-rows">
                            <Row>
                                On my spare time, I've been...
                            </Row>
                            <Row className="list">
                                <ul>
                                    <li>Going to hackathons! I was at PennApps and plan to go to HackPrinceton so come say hi!</li>
                                    <li>On the prowl for good coffee in Toronto</li>
                                </ul>
                            </Row>
                        </Row>
                        <Row>
                            <p className="links-row">
                                <Link to="/breadblog">bread reviews</Link>
                                &emsp;
                                <a href={Resume} target="_blank" rel="noopener noreferrer">resume</a>
                            </p>
                        </Row>
                    </Col>    
                </Row>
            </Container>
        );
    }
}