import React, { Component } from 'react'
import './FrontPage.css';
import FrontSlides from './carousel';
import FrontServices from './services';
import FrontAbout from './about';

class FrontPage extends Component {
    render() {
        return (
            <div>
                <FrontSlides />
                <FrontServices />
                <FrontAbout />
            </div>
        );
    }
}

export default FrontPage;