import React from 'react'
import { Button, Carousel, Modal } from 'react-bootstrap'

export default class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
  
      this.handleShow = () => {
        this.setState({ show: true });
      };
  
      this.handleHide = () => {
        this.setState({ show: false });
      };
    }
  
    render() {
      return (
        <>
          <Button className="about-front-btn" variant="primary" onClick={this.handleShow}>
            CONOCÉ MÁS
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                  <Carousel.Item>
                      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                  </Carousel.Item>
              </Carousel>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  