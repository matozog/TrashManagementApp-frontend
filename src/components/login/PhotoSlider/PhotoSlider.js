import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import {WelcomePic, PazurCapPic, PazurGamePic, PazurPullsPic, ChristmasTreePic, McPic} from '../../pictures/index'
import '../PhotoSlider/PhotoSlider.css'

export default class PhotoSlider extends Component{

    render(){
        const photoList = [WelcomePic, PazurCapPic, PazurPullsPic, ChristmasTreePic, McPic, PazurGamePic]
        return(
            <Carousel align="center">
                {
                photoList.map(photo => {
                    return <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={photo}
                        alt="First slide"
                        />
                    </Carousel.Item>
                })
                }
            </Carousel>
        )
    }
}