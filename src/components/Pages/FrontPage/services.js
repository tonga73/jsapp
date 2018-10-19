import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faArchway, faCertificate, faBuilding, faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(faClipboardCheck, faArchway, faCertificate, faBuilding, faLightbulb)

export default class FrontServices extends Component {
  render() {
    return (
      <div>
        <section className="services-front-section">
        <ul>
            <li>
                <FontAwesomeIcon icon="clipboard-check" />
            <h5>
                Relevamiento
            </h5>
            </li>
            <li>
                <FontAwesomeIcon icon="archway" />
            <h5>
                Diseño
            </h5>
            </li>
            <li>
                <FontAwesomeIcon icon="certificate" />
            <h5>
                Planos
            </h5>
            </li>
            <li>
                <FontAwesomeIcon icon="building" />
            <h5>
                Dirección de obra
            </h5>
            </li>
            <li>
                <FontAwesomeIcon icon="lightbulb" />
            <h5>
                Asesoramiento general
            </h5>
            </li>
        </ul>
        </section>
      </div>
    )
  }
}
