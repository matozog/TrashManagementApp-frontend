import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "./SortBar.css"
import { connect } from "react-redux";
import {changeSortingType} from '../../../actions/index' ;

const mapStateToProps = state =>{
    return{
        sortingType: state.sortTypeInSchedule
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeSortingType: sortingType => dispatch(changeSortingType(sortingType))
    };
}

class SortBar extends Component {

    selectSortingType = (e) => {
        this.props.changeSortingType(e.target.value);
        this.props.sortDustmans();
    }

    render() {
        return (
            <div className="sort-bar">
                <h4>Sort by:</h4>
                <DropdownButton id="dropdown-item-button" title={this.props.sortingType}>
                    <Dropdown.Item onClick={this.selectSortingType} as="button" value="Oil">Oil</Dropdown.Item>
                    <Dropdown.Item onClick={this.selectSortingType} as="button" value="Paper">Paper</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);