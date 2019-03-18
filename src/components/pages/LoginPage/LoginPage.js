import React, { Component } from 'react';
import LoginHeader from '../../login/LoginHeader/LoginHeader'
import LogForm from '../../login/LogForm/LogForm';
import  '../../pictures/index.js';
import './LoginPage.css'

class LoginPage extends Component{

    render(){

        return (
            <div className="loginPage" align='center'>
                <LoginHeader/>
                <LogForm />
            </div>
        );
    }
}

export default LoginPage;