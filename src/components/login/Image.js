import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

class Image extends Component{

    render(){
        return(
            <Card>
                {/* <img src={this.props.source} height={300} style={{transform: `rotate(${this.props.rotation}deg)`, borderWidth: '2px', borderColor: 'white'}} alt={this.props.alt}/> */}
                <CardMedia
            // className={classes.media}
                image={this.props.source}
                title="Paella dish"
                />
            </Card>
        );
    }
}

export default Image;