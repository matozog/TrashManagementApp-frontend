import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "./SortBar.css"
import { connect } from "react-redux";
import {changeSortingType} from '../../../actions/index' ;
import { products } from './../../../constans/index'

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
        const newSortType = e.target.value
        this.props.changeSortingType(newSortType);
        this.props.sortDustmans(newSortType);
    }

    render() {
        return (
            <div className="sort-bar">
                <h4>Sort by:</h4>
                <DropdownButton id="dropdown-item-button" title={this.props.sortingType}>
                    {products.map(type => {
                        return <Dropdown.Item onClick={this.selectSortingType} as="button" value={type}>{type}</Dropdown.Item>

                    })}
                </DropdownButton>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);