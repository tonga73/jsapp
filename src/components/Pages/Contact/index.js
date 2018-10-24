import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap';
import SocialNav from '../../Main/SocialNav';
import { Card, CardDeck, ListGroup } from 'react-bootstrap';
import { faPhone, faEnvelope, faMobile, faHome } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPhone, faEnvelope, faMobile, faHome)

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Jumbotron className="text-right" fluid>
            <h1>MEDIOS DE CONTACTO
              <SocialNav />
            </h1>
        </Jumbotron>
        <Container>
          <CardDeck>
            <Card bg="light" border="info" text="dark" style={{ width: '18rem' }}>
              <Card.Header><FontAwesomeIcon icon="envelope" />&nbsp;Correo electrónico</Card.Header>
              <Card.Body>
                <Card.Title>Campo Viera - Misiones</Card.Title>
                <Card.Text>
                  Barrio 105 viviendas | casa 5
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" border="info" text="dark" style={{ width: '18rem' }}>
              <Card.Header><FontAwesomeIcon icon="envelope" />&nbsp;Correo postal</Card.Header>
              <Card.Body>
                <Card.Text>
                  arquitectajuliasosa@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" border="info" text="dark" style={{ width: '18rem' }}>
              <Card.Header><FontAwesomeIcon icon="phone" />&nbsp;Número telefónico</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>(03755) - 672213&nbsp;<FontAwesomeIcon icon="mobile" /></ListGroup.Item>
                  <ListGroup.Item>(03755) - 444333&nbsp;<FontAwesomeIcon icon="home" /></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
			</div>
    )
  }
}
