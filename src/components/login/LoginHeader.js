import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class LoginHeader extends Component{
    render(){
        return(
            <Typography component="h2" color="primary" variant="display3" gutterBottom align="center" margin={100}>
                Trash Management System
            </Typography>
        );
    }
}

export default LoginHeader;