import React from 'react';
import {Carousel} from 'react-bootstrap';
import image from '../../assets/astronomia.jpg'
import image2 from '../../assets/rupestre.jpg'
import image3 from '../../assets/Arara.jpg'

export default class CarouselAtracoes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Astronomia</h3>
                        Nulla vitae elit libero, a pharetra augue 
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Origem do homem</h3>
                        Lorem ipsum dolor sit amet, consectetur
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Biodiversidade</h3>
                        Praesent commodo cursus magna, vel
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}