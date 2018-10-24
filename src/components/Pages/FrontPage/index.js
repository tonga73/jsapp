import React, { Component } from 'react'
import FrontSlides from './carousel';
import FrontServices from './services';
import FrontAbout from './about';
import FrontModal from './modal';

class FrontPage extends Component {
    render() {
        return (
            <div id="frontpage">
                <FrontSlides />
                <FrontServices />
                <FrontAbout />
                <FrontModal />
            </div>
        );
    }
}

export default FrontPage;