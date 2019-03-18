import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import './LogForm.css'


const styles = theme => ({
    container: {
        display: 'flex-end',
    //   margin: 20,
        margin: theme.spacing.unit,
        spacing: 15,
        color: "white",
        borderColor: "black",
        borderWidth:"2px",
    },
    textField: {
    //   width: 300,
      margin: 20,
      align:'right',
      borderColor:"black",
    },
    typography:{
        align: 'left',
        color:"primary",
        borderColor:"black",
        borderWidth:"3px",
        // margin: 20,
        //  height: 60,
    },
    button: {
        margin: theme.spacing.unit,
      },
    margin:{
        margin: theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
        width:300,
        left:'50%',
        top:'50%',
        marginLeft:'85px',
    },
    card: {
        minWidth: 275,
        maxWidth: 400,
        margin: theme.spacing.unit,
        align: 'center'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 20,
      },
      pos: {
        marginBottom: 12,
      },
  });

class LogForm extends Component{

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
                    <Button variant="primary">Enter!</Button>
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

export default withStyles(styles)(LogForm);