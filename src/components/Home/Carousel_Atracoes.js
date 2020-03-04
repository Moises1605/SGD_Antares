import React from "react";
import { Carousel } from "react-bootstrap";
import image from "../../assets/astronomia.jpg";
import image2 from "../../assets/rupestre.jpg";
import image3 from "../../assets/Arara.jpg";

export default class CarouselAtracoes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="First slide" />
            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Astronomia
              </h3>
              <span
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Que tal uma observadinha no nosso lindo universo?
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Third slide" />

            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Origem do homem
              </h3>
              <span
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Desvende os mistérios por trás da origem do homem.
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Biodiversidade
              </h3>
              <span
                style={{
                  textShadow: "0 0 0.2em black, 0 0 0.2em black,0 0 0.2em black"
                }}
              >
                Conheça a majestosa variedade de formas de vida encontradas em
                nosso país.
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}
