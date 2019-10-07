import React, { Component } from 'react'
import { Button } from "react-bootstrap"
import "./CheckButton.css"

export default class CheckButton extends Component {

    constructor() {
        super()
        this.state = {
            enabled: false
        }
    }

    handleClickButton = (event) => {
        this.setState({enabled: !this.state.enabled})
    }

    render() {
        let btn_class = this.state.enabled ? "add-button-green" : "add-button-red";

        return (
            <Button id={this.props.purchase.id} className={btn_class} onClick={this.handleClickButton}>Checked</Button>
        )
    }

}