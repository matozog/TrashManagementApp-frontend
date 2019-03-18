import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import { withStyles, withTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { Card, Button, InputGroup, FormControl, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
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
        const { classes } = this.props;

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


            // <form className={classes.container} noValidate align="center" autoComplete="off">
                // <Card className={classes.card}>
                // <CardContent align='center'>
                //     <Grid container spacing={24}>
                //         <Grid item xs={12}>
                //             <Typography className={classes.title} color="textSecondary" gutterBottom>
                //             Log in to the system
                //             </Typography>
                //         </Grid>
                //         <Grid container spacing={8}  align='center'>
                //             <Grid item align='center'>
                //                 <AccountCircle />
                //                 <TextField  id="input-with-icon-grid" label="Type your nick ..."  />
                //             </Grid>
                //         </Grid>
                //         <Grid item xs={12}>
                //         <TextField
                //             className={classes.textField}
                //             id="outlined-password-input"
                //             label="Password"
                //             type="password"
                //             autoComplete="current-password"
                //             margin="normal"
                //             align="right"
                //             variant="outlined"
                //             color="white"
                //         />
                //         </Grid>
                //     </Grid>
                // </CardContent>
                // <CardActions align='center'>
                //     <Button variant="contained" color="secondary" className={classes.button}>
                //         Enter !
                //     </Button>
                // </CardActions>
                // <CardActions align='center'>
                //     <Link color="primary" >Any problems with password?</Link>
                // </CardActions>
                // <CardActions align='center'>
                //     <Link color="primary ">No account?</Link>
                // </CardActions>
                // </Card>
            // {/* </form> */}
        );
    }
}

LogForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(LogForm);