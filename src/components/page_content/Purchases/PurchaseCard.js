import React, { Component } from 'react'
import { Card, Dropdown, Image, Button } from 'react-bootstrap'
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import './PurchaseCard.css'
import 'moment/locale/en-ie';
import 'rc-datepicker/lib/style.css';
import Photo from '../../../resources/images/photo/powitanie.jpg'
import { products } from './../../../constans/index'


const defaultArticle = "Oil"

class PurchaseCard extends Component {

    constructor() {
        super()
        this.state = {
            chosenArticle: defaultArticle,
            amountOfPurchases: 1,
            date: Date.now(),
            buyer: ""
        }
    }

    componentDidMount() {
        if (this.props.disabledCard) {
            this.setState({
                chosenArticle: this.props.product,
                amountOfPurchases: this.props.amount,
                date: this.props.date,
            })
        }
        this.setState({
            buyer: this.props.buyer
        })
    }

    handleChoosingArticle = (event) => {
        event.preventDefault()
        this.setState({
            chosenArticle: event.target.value
        })
        this.props.changePurchaseParam(event)
    }

    handleChoosingQuantity = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            amountOfPurchases: event.target.value
        })
        this.props.changePurchaseParam(event)
    }

    handleChangeDate = (jsDate, dateString) => {
        this.setState({
            date: dateString
        })
        this.props.changePurchaseParam(dateString)
    }

    render() {
        return (
            <div className="purchase">
                <Card className="purchase-card">
                    <div className="product-info">
                        <Dropdown className="dropdown-button">
                            <Dropdown.Toggle disabled={this.props.disabledCard} variant="success" className = "dropdown-button-products" id="dropdown-basic">
                                {(this.props.article !== undefined) ? this.props.article : this.state.chosenArticle}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {products.map(product => {
                                    return <Dropdown.Item id="product" as="button" onClick={this.handleChoosingArticle} value={product}>{product}</Dropdown.Item>

                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        <h6 className="ratio"> Ratio:  </h6>

                        <Dropdown className="dropdown-button">
                            <Dropdown.Toggle disabled={this.props.disabledCard} variant="success" id="dropdown-basic">
                                {this.state.amountOfPurchases}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item id="amount" as="button" onClick={this.handleChoosingQuantity} value="1">1</Dropdown.Item>
                                <Dropdown.Item id="amount" as="button" onClick={this.handleChoosingQuantity} value="2">2</Dropdown.Item>
                                <Dropdown.Item id="amount" as="button" onClick={this.handleChoosingQuantity} value="3">3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="date-info">
                        <DatePickerInput
                            onChange={this.handleChangeDate}
                            value={this.state.date}
                            className='date-picker'
                            disabled={this.props.disabledCard}
                        // {...anyReactInputProps}
                        />
                    </div>
                    <div className="user-info">
                        <Image className='imgUser' src={Photo} roundedCircle />
                        <h6> {this.props.buyer}</h6>
                    </div>
                </Card>
            </div>
        )
    }
}

export default PurchaseCard;