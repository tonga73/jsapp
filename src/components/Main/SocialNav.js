import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faEnvelope)

export default class SocialNav extends Component {
  render() {
    return (
      <div id="social-nav">
        <Nav>
            <Nav.Item>
                <Nav.Link href="https://google.com" eventKey="link-0">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://google.com" eventKey="link-1">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://google.com" eventKey="link-2">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://google.com" eventKey="link-3">
                    <FontAwesomeIcon icon="envelope" />
                </Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
    )
  }
}
