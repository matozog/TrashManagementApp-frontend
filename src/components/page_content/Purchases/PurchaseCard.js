import React, { Component } from 'react'
import { Card, Dropdown, Image, Button } from 'react-bootstrap'
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import './PurchaseCard.css'
import 'moment/locale/en-ie';
import 'rc-datepicker/lib/style.css';
import Photo from '../../../resources/images/photo/powitanie.jpg'

const defaultArticle = "Oil"

class PurchaseCard extends Component {

    constructor() {
        super()
        this.state = {
            chosenArticle: defaultArticle,
            amountOfPurchases: 1
        }
    }

    handleChoosingArticle = (event) => {
        event.preventDefault()
        this.setState({
            chosenArticle: event.target.value
        })
    }

    handleChoosingQuantity = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            amountOfPurchases: event.target.value
        })
    }

    handleChangeDate = (jsDate, dateString) => {
        console.log(jsDate, dateString)
    }

    render() {
        return (
            <div className="purchase">
                <Card className="purchase-card">
                    <div className="product-info">
                        <Dropdown className="dropdown-button">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {(this.props.article !== undefined) ? this.props.article : this.state.chosenArticle}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as="button" onClick={this.handleChoosingArticle} value="Oil">Oil</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.handleChoosingArticle} value="Paper">Paper</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.handleChoosingArticle} value="Super dlugi produkt">Super dlugi produkt</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h6> Ratio:  </h6>

                        <Dropdown className="dropdown-button">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.amountOfPurchases}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as="button" onClick={this.handleChoosingQuantity} value="1">1</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.handleChoosingQuantity} value="2">2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="date-info">
                        <DatePickerInput
                            onChange={this.handleChangeDate}
                            value={Date.now()}
                            className='date-picker'
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