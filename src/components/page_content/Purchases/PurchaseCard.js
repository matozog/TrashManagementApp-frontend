import React, { Component } from 'react'
import { Card, Dropdown, Image } from 'react-bootstrap'
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
            <Card className="purchase-card">

                <Dropdown className="dropdown-button">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {(this.props.article !== undefined) ? this.props.article : this.state.chosenArticle}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={this.handleChoosingArticle} value="Oil">Oil</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={this.handleChoosingArticle} value="Paper">Paper</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h5> Ratio:  </h5>

                <Dropdown className="dropdown-button">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.amountOfPurchases}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={this.handleChoosingQuantity} value="1">1</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={this.handleChoosingQuantity} value="2">2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <DatePickerInput
                    onChange={this.handleChangeDate}
                    value={Date.now()}
                    className='my-custom-datepicker-component'
                    // {...anyReactInputProps}
                />
                <Image className='imgUser' src={Photo} roundedCircle/>
                <h5> {this.props.loggedUser}</h5>
            </Card>
        )
    }
}

export default PurchaseCard;