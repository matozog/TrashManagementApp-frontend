import React, { Component } from 'react';
import './Schedule.css';
import { Card, Button, CardDeck, CardColumns, ListGroup, ListGroupItem, Spinner } from "react-bootstrap"
import Avatar from "../../../resources/images/photo/choinka.jpg"
import SortBar from "./SortBar"
import { connect } from "react-redux";
import { products } from './../../../constans/index'

const serverIP = "192.168.0.103"

const mapStateToProps = state => {
    return {
        sortingType: state.sortTypeInSchedule
    }
}

const firstCharLower = word => {
    return word.charAt(0).toLowerCase() + word.slice(1)
}

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            dustmans: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const response = await fetch('http://' + serverIP + ':8080/home/allDustmen')
        const json = await response.json()
        this.setState({
            dustmans: json
        })
        this.sortDustmans(this.props.sortingType.toLowerCase())
    }

    sortDustmans = (sortType) => {
        sortType = firstCharLower(sortType)
        this.setState({
            isLoading: true
        })
        this.state.dustmans.sort((a, b) => (a.dustmanData[sortType] > b.dustmanData[sortType]) ? 1 : -1)
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            <div className="container">
                <SortBar sortDustmans={this.sortDustmans} />
                {this.state.isLoading ? <Spinner animation="border" variant="dark" /> :
                    <CardDeck bsPrefix="deck" className="cards-container">
                        {this.state.dustmans.map((dustman, index) => (
                            <Card className="dustman-card" key={index} bg="light" border="dark">
                                <Card.Img variant="top" src={Avatar} style={{ height: "200px" }} />
                                <Card.Body>
                                    <Card.Title>{dustman.login}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        {products.map(product => {
                                            return <ListGroupItem active={this.props.sortingType === product}>{product}: {dustman.dustmanData[firstCharLower(product)]}</ListGroupItem>

                                        })}
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary"> Profile </Button>
                                </Card.Footer>
                            </Card>
                        ))}
                    </CardDeck>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Schedule);