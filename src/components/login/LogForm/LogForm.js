import React, { Component } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './LogForm.css';
import InfoDialog from '../InfoDialog/InfoDialog'


class LogForm extends Component{

    constructor(){
        super()

        this.state = {
            modalShow: false
        }
    }

    
    handleLoginAction = () =>{
        this.props.history.push("/home");
    }

    handleShowInfoDialog = () =>{
        this.setState({modalShow: true})
        console.log(this.state)
    }

    render(){

        let modalClose = () => this.setState({ modalShow: false });

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
                    <Button className="btn-link btn-light" onClick={this.handleShowInfoDialog}>Any problems with password?</Button><br></br>
                    <Button className="btn-link btn-light" onClick={this.handleShowInfoDialog}>No account?</Button>
                </Card.Footer>
                <InfoDialog show = {this.state.modalShow} onHide={modalClose}/>
            </Card>
        );
    }
}

export default withRouter(LogForm);