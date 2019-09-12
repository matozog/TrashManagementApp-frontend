import React, { Component } from 'react';
import './Schedule.css';
import { Card, Button, CardDeck, CardColumns, ListGroup, ListGroupItem } from "react-bootstrap"
import { dustmans } from "./dustman-test"
import Avatar from "../../../resources/images/photo/choinka.jpg"

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            dustmans: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <CardDeck className="cards-container">
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
                </CardDeck>
            </div>
        );
    }
}

export default Schedule;