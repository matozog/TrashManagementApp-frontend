import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import './Schedule.css'

class Schedule extends Component{

    render(){
        return (
            <div className="table-container">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Trash</th>
                    <th>Toilet paper</th>
                    <th>Oil</th>
                    <th>Soap</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td>@facebook</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}

export default Schedule;