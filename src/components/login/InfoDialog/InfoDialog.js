import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'

class InfoDialog extends Component{

    render(){
        return(
        <Modal size="lg" centered {...this.props}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Any problems?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    This option is not implemented yet. If you have any problems with service you should 
                    contact with administrator.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default InfoDialog;