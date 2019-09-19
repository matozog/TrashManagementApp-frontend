import React, { Component } from 'react';
import './Purchases.css'
import PurchaseCard from './PurchaseCard'

class UserProfile extends Component {

    render() {
        return (
            <div>
                <PurchaseCard />
            </div>
        );
    }
}

export default UserProfile;