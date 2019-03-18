import React, { Component } from 'react';
import LoginHeader from '../components/login/LoginHeader'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LogForm from '../components/login/LogForm';
import Background from '../images/trash-background.jpg';
import Image from '../components/login/Image'
import PazurGamePic from '../images/photo/pazur_gra.jpg'
import PazurPullsPic from '../images/photo/pazur_sciaga.jpg'
import PazurCapPic from '../images/photo/pazur_czapa.jpg'
import ChristmasTreePic from '../images/photo/choinka.jpg'
import McPic from '../images/photo/zlote_luki.jpg'
import WelcomePic from '../images/photo/powitanie.jpg'

const styles = theme => ({
    loginPageStyle: {
        width: "100%",
        height: "100%",
        // margin: theme.spacing.unit,
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover' ,
        backgroundPosition: "center",
    },
  });

class LoginPage extends Component{

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.loginPageStyle} align='center'>
                <LoginHeader/>
                {/* <Grid  align='center'> */}
                    {/* <Grid item xs={4}>
                        {/* <Paper >xs=6</Paper> */}
                        {/* <Image source={PazurGamePic} rotation={10} alt=""/>
                    </Grid> */} 
                    {/* <Grid item xs={4} align='center'> */}
                        <LogForm />
                    {/* </Grid> */}
                    {/* <Grid item xs={4}>
                        {/* <Paper>xs=6</Paper> */}
                        {/* <Image source={PazurPullsPic} rotation={0} alt=""/>
                    </Grid>
                    <Grid item xs={3}> */}
                        {/* <Paper >xs=3</Paper> */}
                        {/* <Image source={PazurCapPic} rotation={-10} alt=""/>
                    </Grid>
                    <Grid item xs={3}> */}
                        {/* <Paper >xs=3</Paper> */}
                        {/* <Image source={ChristmasTreePic} rotation={15} alt=""/>
                    </Grid>
                    <Grid item xs={3}> */}
                        {/* <Paper >xs=3</Paper> */}
                        {/* <Image source={McPic} rotation={-30} alt=""/>
                    </Grid>
                    <Grid item xs={3}> */}
                        {/* <Paper>xs=3</Paper> */}
                        {/* <Image source={WelcomePic} rotation={20} alt=""/>
                    </Grid> */}
                {/* </Grid> */}
            </div>
        );
    }
}

export default withStyles(styles)(LoginPage);