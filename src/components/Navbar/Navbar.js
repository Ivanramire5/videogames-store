import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const links = [
    {
        name: "Inicio",
        href: "/"
    },
    {
        name: "Horror",
        href: "/horror"
    },
    {
        name: "Indies",
        href: "/indies"
    },
    {
        name: "Rpg",
        href: "/rpg"
    },
    {
        name: "Sandbox",
        href: "/sandbox"
    },
    {
        name: "Shooters",
        href: "/shooters"
    }
]

const NavBar = () => {
    return (
        <div className='contenedorNav'>
            <Navbar expand="lg" className="bg-body-tertiary navbar-expand-lg navbar-dark">
                <Container fluid className='navBarContainer'>
                    <Navbar.Brand>🕹️</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="basic-navbar-nav">
                        <Nav className="mx-auto">
                            {links.map(x => (
                                <Link className='nombresLinks' to={x.href}>{x.name}</Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default NavBar;