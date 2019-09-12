import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "./SortBar.css"

class SortBar extends Component {

    constructor(){
        super()
        this.state = {
            sortingType: "Oil"
        }
    }

    selectSortingType = (e) => {
        this.setState({
            sortingType: e.target.value
        })
    }

    render() {
        return (
            <div className="sort-bar">
                <h4>Sort by:</h4>
                <DropdownButton id="dropdown-item-button" title={this.state.sortingType}>
                    <Dropdown.Item onClick={this.selectSortingType} as="button" value="Oil">Oil</Dropdown.Item>
                    <Dropdown.Item onClick={this.selectSortingType} as="button" value="Paper">Paper</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }

}

export default SortBar;