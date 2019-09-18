import React, { Component } from 'react';
import './Schedule.css';
import { Card, Button, CardDeck, CardColumns, ListGroup, ListGroupItem, Spinner } from "react-bootstrap"
import { dustmans } from "./dustman-test"
import Avatar from "../../../resources/images/photo/choinka.jpg"
import SortBar from "./SortBar"
import { connect } from "react-redux";

const mapStateToProps = state => {
    return{
        sortingType: state.sortTypeInSchedule
    }
}

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            dustmans: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.sortDustmans(this.props.sortingType.toLowerCase())
    }

    sortDustmans = (sortType) => {
        this.setState({
            isLoading: true
        })
        dustmans.sort((a,b) => (a[sortType] > b[sortType]) ? 1: -1)
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            <div className="container">
                <SortBar sortDustmans={this.sortDustmans}/>
                {this.state.isLoading ? <Spinner animation="border" variant="dark" />:
                <CardDeck bsPrefix="deck" className="cards-container">
                    {dustmans.map((dustman, index) => (
                        <Card className="dustman-card" key={index} bg="light" border="dark">
                            <Card.Img variant="top" src={Avatar} style={{ height: "200px" }} />
                            <Card.Body>
                                <Card.Title>{dustman.name}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Oil: {dustman.oil}</ListGroupItem>
                                    <ListGroupItem>Paper: {dustman.paper} </ListGroupItem>
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