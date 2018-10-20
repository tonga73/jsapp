import React, { Component } from 'react'
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    componentWillMount() {
       window.addEventListener('scroll', () => {
           //const scrollable = document.documentElement.scrollHeight - window.innerHeight;
           const scrolled = window.scrollY;
           let header = document.getElementById("main-navigator");

           if (scrolled === 0) {
               header.classList.remove("scrolled");
           } else {
                header.classList.add("scrolled");
           }
       })
    }
    componentDidUpdate() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <div id="main-navigator" className="Header">
                <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-1/p200x200/22089764_1994334754181728_412719131620178263_n.jpg?_nc_cat=103&oh=0ed68d11f9c27317b3a910ecd0038a69&oe=5C564D0D" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="nav" className="ml-auto">
                            <NavLink exact={true} className="nav-link" to="/">Inicio</NavLink>
                            <NavLink className="nav-link" to="/pages/projects">Proyectos</NavLink>
                            <NavLink className="nav-link" to="/pages/blog">Blog</NavLink>
                            <NavLink className="nav-link" to="/pages/contact">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;