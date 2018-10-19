import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

export default class FrontSlides extends Component {
  render() {
    return (
    <div id="carousel-front">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t1.0-9/29468508_2088328938115642_8092945410575826944_n.jpg?_nc_cat=110&_nc_ht=scontent.fcnq2-1.fna&oh=7bf4f0cfc69610052907756ca4a6fd32&oe=5C56CA2E"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t31.0-8/22555784_2003331153282088_7665897502742217941_o.jpg?_nc_cat=105&_nc_ht=scontent.fcnq2-1.fna&oh=9f8c5612c50afc2728cef272c00ec9f6&oe=5C5DF9E8"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t1.0-9/22549751_2003326656615871_3352429987013249855_n.jpg?_nc_cat=111&_nc_ht=scontent.fcnq2-1.fna&oh=e6fec08bfdd013d9d4cfc1118707bf16&oe=5C450C05"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
  }
}
