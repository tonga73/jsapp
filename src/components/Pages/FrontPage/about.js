import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faPlus)

export default class FrontAbout extends Component {
  render() {
    return (
      <div>
        <article className="about-front-article">
        <p className="about-front-text">
            <FontAwesomeIcon icon="plus" />&nbsp;Elegí personal <strong>competente y especializado</strong> para 
            la construcción de tu obra.
            <br /><br />
            <FontAwesomeIcon icon="plus" />&nbsp;Ahorrá tiempo y dinero siguiendo un plan de 
            construcción <strong>dedicado a tu proyecto.</strong>
        </p>
        <span className="about-front-img">
        </span>
        </article>
        <Button className="about-front-btn"><Link to="/pages/projects" className="d-block">CONOCÉ MÁS</Link></Button>
      </div>
    )
  }
}
