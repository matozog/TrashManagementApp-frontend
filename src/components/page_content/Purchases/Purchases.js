import React, { Component } from 'react';
import './Purchases.css'
import PurchaseCard from './PurchaseCard'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return{
        loggedUser: state.loggedUser
    }
}

class UserProfile extends Component {

    render() {
        return (
            <div className="purchases-container">
                <PurchaseCard loggedUser = {this.props.loggedUser} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserProfile);