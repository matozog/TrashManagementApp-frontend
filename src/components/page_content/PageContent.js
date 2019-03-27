import React, { Component } from 'react';
import './PageContent.css'
import { connect } from "react-redux";
import UserProfile from './UserProfile/UserProfile';
import DustmansTab from './DustmansTab/DustmansTab';
import Schedule from './Schedule/Schedule'

const mapStateToProps = state => {
    return {
        mainTabs: state.mainTabs
    }
}

class PageContent extends Component{

    render(){
        return (
            <div>
                {this.props.mainTabs.choosenTab==="#schedule" && <Schedule />}
                {this.props.mainTabs.choosenTab==="#profile" && <UserProfile />}
                {this.props.mainTabs.choosenTab==="#dustmans" && <DustmansTab />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(PageContent);