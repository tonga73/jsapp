import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


library.add(faPlus)

export default class FrontAbout extends Component {
  render() {
    return (
      <div id="about-front">
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
      </div>
    )
  }
}
