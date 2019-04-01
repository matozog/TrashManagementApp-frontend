import React, { Component } from 'react';
import { connect } from "react-redux";
import {Navbar, Nav, Image} from 'react-bootstrap'
import {changeMainTab} from '../../actions/index' 
import './TopMenu.css'
import Photo from '../../resources/images/photo/powitanie.jpg'
import BrandImage from '../../resources/images/trash-background_.jpg'

function mapDispatchToProps(dispatch) {
    return {
        changeMainTab: choosenTab => dispatch(changeMainTab(choosenTab))
    };
  }

class TopMenu extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
      }
      
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    handleSelectTab = event => {
        this.props.changeMainTab(event)
    }

    render(){

        return (
        <div>
            <Navbar className="topMenu" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="https://mapa.targeo.pl/drukarnia-petit-s-c-kuropatwia-5-51-419-wroclaw~6009185/drukarnia/adres">
                        <Image className="imgBrand" src={BrandImage} roundedCircle/> Kuropatwia 5   
                    </Navbar.Brand>
                    <Navbar.Toggle id="responsive-navbar-nav" className="navbar-toggler"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse collapse">
                    <Nav className="mr-auto navbar-nav" onSelect={this.handleSelectTab}>
                        <Nav.Link id="schedule" href="#schedule">Schedule</Nav.Link>
                        <Nav.Link id="profile" href="#profile">Profile</Nav.Link>
                        <Nav.Link id="dustmans" href="#dustmans">Others dustmans</Nav.Link>
                    </Nav>
                    <Nav className="navbar-nav" onSelect={this.handleSelectTab}>
                        <Nav.Link href="#profile">
                            <Image className='imgUser' src={Photo} roundedCircle/>
                        </Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                 </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TopMenu);