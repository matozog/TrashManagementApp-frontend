import React, { Component } from 'react';
import './Purchases.css'
import PurchaseCard from './PurchaseCard'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import CheckButton from './CheckButton'

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser
    }
}

const examplePurchases = [
    {
        id: "1",
        product: "Oil",
        amount: 2,
        date: "22-09-2019",
        user: "zuku"
    },
    {
        id: "2",
        product: "Paper",
        amount: 4,
        date: "25-09-2019",
        user: "zuku"
    },
]

class UserProfile extends Component {

    render() {
        return (
            <div className="purchases-container">
                <div className="new-purchase">
                    <PurchaseCard buyer={this.props.loggedUser} />
                    <Button variant="success" className="add-button">Add</Button>
                </div>
                <div className="sub-header">
                    <h5 align="center"> Waiting for confirm:  </h5>
                </div>
                {examplePurchases.map(purchase => {
                    return <div className="not-confirmed-purchase">
                        <PurchaseCard product={purchase.product} amount={purchase.amount} date={purchase.date} buyer={purchase.user} />
                        <CheckButton purchase={purchase} />
                    </div>
                })}
                <div className="footer">
                    <Button variant="success" className="confirm-button" onClick={this.handleClickButton}>Confirm</Button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserProfile);