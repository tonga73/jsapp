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
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t1.0-9/23231508_2011447979137072_1721341645539726681_n.jpg?_nc_cat=102&_nc_ht=scontent.fcnq2-1.fna&oh=8966a177029c062ba26030cd2cfc2c19&oe=5C499CD3"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t1.0-9/22221597_1994512820830588_14543496984931050_n.jpg?_nc_cat=111&_nc_ht=scontent.fcnq2-1.fna&oh=651912727e02b0f263c6cfc8ac00549d&oe=5C57F2F7"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t1.0-9/29343182_2088328858115650_1715389141790752768_n.jpg?_nc_cat=108&_nc_ht=scontent.fcnq2-1.fna&oh=1aef89eb55a37ab721a7e3f337cc1f1f&oe=5C5CF370"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    )
  }
}
