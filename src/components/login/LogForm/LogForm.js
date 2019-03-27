import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './LogForm.css';


class LogForm extends Component{

    handleLoginAction = () =>{
        this.props.history.push("/home");
    }

    render(){

        return (
            <Card className="loginCard">
                <Card.Body className="loginCardBody">
                    <Card.Title>Log in to the system</Card.Title>
                    <InputGroup className="mb-3">
                        <FormControl
                        className="inputStyle"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        className="inputStyle"
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={this.handleLoginAction}>Enter!</Button>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="#">Any problems with password?</Card.Link>
                    <br></br>
                    <Card.Link href="#">No account?</Card.Link>
                </Card.Footer>
            </Card>
        );
    }
}

LogForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(LogForm);