import React, { Component } from 'react';
import LoginHeader from '../../login/LoginHeader/LoginHeader'
import LoginForm from '../../login/LoginForm/LoginForm';
import  '../../pictures/index.js';
import {Container, Col,  Row } from 'react-bootstrap'
import './LoginPage.css';
import '../../pictures/index';
import PhotoSlider from '../../login/PhotoSlider/PhotoSlider'

class LoginPage extends Component{

    render(){

        return (
            <Container className="loginPage" >
                <Row className="test" align="center">
                    <Col><LoginHeader/></Col>
                </Row>
                <Row align="center">
                    <Col><LoginForm /></Col>
                </Row>
                <Row>
                    <Col>
                        <PhotoSlider />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginPage;