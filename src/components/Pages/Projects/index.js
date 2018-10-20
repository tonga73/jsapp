import React, { Component } from 'react'

import SocialNav from '../../Main/SocialNav';
import { Card, CardColumns, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faEnvelope)

export default class Projects extends Component {
  render() {
    const createCard = () => {
      const imgArq = [
        "/images/0.jpg",
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg"
      ];

      for (let i = 0; i < imgArq.length; i++){
        let imgList = imgArq.map((img) => {
          return (
            <Card>
              <Card.Img variant="top" src={img} /> 
              <Button>
                VER
              </Button>
              <SocialNav />
            </Card>          
          ) 
        }) 
        return imgList;
      }
    }

    return (
      <div id="projectspage">
        <CardColumns>
          {createCard()}
        </CardColumns>
      </div>
    )
  }
}
