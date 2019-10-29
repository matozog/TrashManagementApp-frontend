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

let examplePurchases = [
    {
        id: "1",
        product: "Oil",
        amount: 2,
        date: "2019-09-22",
        user: "zuku"
    },
    {
        id: "2",
        product: "Paper",
        amount: 4,
        date: "2019-09-25",
        user: "zuku"
    },
]

class UserProfile extends Component {

    constructor() {
        super()
        this.state = {
            newPurchase: {
                product: "",
                amount: 0,
                date: "",
                user: ""
            }
        }
    }

    handleAddNewPurchase = () => {
        examplePurchases.push(this.state.newPurchase)
        this.forceUpdate()
    }

    handleChangePurchaseParam = (source) => {
        console.log(source)
        if (source.target !== undefined) {
            const newValue = source.target.value
            if (source.target.id === "product") {
                this.setState(prevState => ({
                    newPurchase: {
                        ...prevState.newPurchase,
                        product: newValue,

                    }
                }))
            } else {
                this.setState((prevState, props) => ({
                    newPurchase: {
                        ...prevState.newPurchase,
                        amount: newValue
                    }
                }))
            }
        } else {
            this.setState( prevState => ({
                newPurchase: {
                    ...prevState.newPurchase,
                    date: source
                }
            }))
        }
    }

    componentDidMount() {
        this.setState({
            buyer: this.props.loggedUser
        })
    }

    render() {
        return (
            <div className="purchases-container">
                <div className="new-purchase">
                    <PurchaseCard changePurchaseParam={this.handleChangePurchaseParam} buyer={this.props.loggedUser} newPurchase={this.state.newPurchase} />
                    <Button variant="success" className="add-button" onClick={this.handleAddNewPurchase}>Add</Button>
                </div>
                <div className="sub-header">
                    <h5 align="center"> Waiting for confirm:  </h5>
                </div>
                {examplePurchases.map(purchase => {
                    return <div className="not-confirmed-purchase">
                        <PurchaseCard product={purchase.product} amount={purchase.amount} date={purchase.date} buyer={purchase.user} disabledCard={true} />
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