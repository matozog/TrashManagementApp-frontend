import React, { Component } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './LoginForm.css';
import InfoDialog from '../InfoDialog/InfoDialog'
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';


const signInSchema = yup.object().shape({
    login: yup.string()
            .required("Email is required"),
    password: yup.string()
            .required("Password is required")
  })

class LoginForm extends Component {

    constructor() {
        super()

        this.state = {
            modalShow: false
        }
    }


    handleLoginAction = () => {
        this.props.history.push("/home");
    }

    handleShowInfoDialog = () => {
        this.setState({ modalShow: true })
        console.log(this.state)
    }

    render() {

        let modalClose = () => this.setState({ modalShow: false });

        return (
            <Formik
                initialValues={{ login: "", password: "" }}
                validationSchema={signInSchema}
                onSubmit={(values, { setSubmitting, setValues, setStatus }, errors) => {
                    setTimeout(() => {
                       window.alert(values.login)
                    }, 1000);
                    this.handleLoginAction()
                }}
                render={({ values, errors, handleChange }) => (
                    <Form>
                        <Card className="loginCard">
                            <Card.Body className="loginCardBody">
                                <Card.Title>Log in to the system</Card.Title>
                                <Field
                                    name="login"
                                    placeholder="Login"
                                    className="inputStyle"
                                />
                                <Field
                                    name="password"
                                    placeholder="Password"
                                    className="inputStyle"
                                    type="password"
                                /><br />
                                <Button variant="primary" type="submit">Enter!</Button>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="btn-link btn-light" onClick={this.handleShowInfoDialog}>Any problems with password?</Button><br></br>
                                <Button className="btn-link btn-light" onClick={this.handleShowInfoDialog}>No account?</Button>
                            </Card.Footer>
                            <InfoDialog show={this.state.modalShow} onHide={modalClose} />
                        </Card>
                    </Form>
                )}
            />
        );
    }
}

export default withRouter(LoginForm);