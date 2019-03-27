import React, { Component } from 'react';
import { connect } from "react-redux";
import {Navbar, Nav, Image, NavDropdown} from 'react-bootstrap'
import {changeMainTab} from '../../actions/index' 
import './TopMenu.css'
import TrashImage from '../../resources/images/trash-background_.jpg'
import Photo from '../../resources/images/photo/powitanie.jpg'

function mapDispatchToProps(dispatch) {
    return {
        changeMainTab: choosenTab => dispatch(changeMainTab(choosenTab))
    };
  }

class TopMenu extends Component{

    handleSelectTab = event => {
        this.props.changeMainTab(event)
    }

    render(){

        return (
        
        <Navbar bg="dark" variant="dark" collapseOnSelect expand='lg' >
            <Navbar.Brand href="/home">
                <Image className='imgBrand' src={TrashImage} roundedCircle />
            </Navbar.Brand>
            <Nav className="mr-auto" onSelect={this.handleSelectTab}>
                <Nav.Link id="schedule" href="#schedule">Schedule</Nav.Link>
                <Nav.Link id="profile" href="#profile">Profile</Nav.Link>
                <Nav.Link id="dustmans" href="#dustmans">Others dustmans</Nav.Link>
            </Nav>
            {/* <Navbar.Toggle id="responsive-navbar-nav">
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#schedule">Schedule</NavDropdown.Item>
                    <NavDropdown.Item href="#profile">Profile action</NavDropdown.Item>
                    <NavDropdown.Item href="#dustmans">Others dustmans</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Toggle> */}

            <Nav.Item className="userPart">
                <Image className='imgUser' src={Photo} roundedCircle/>
                <Nav.Link href="/">Logout</Nav.Link>
            </Nav.Item>
        </Navbar>

        );
    }
}

export default connect(null, mapDispatchToProps)(TopMenu);