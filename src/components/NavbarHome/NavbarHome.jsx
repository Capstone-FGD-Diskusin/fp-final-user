import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import style from './Navbar.module.css'

export default function NavbarHome() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={style.NavH} variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/" > <h3 className={style.text2}>LOGO</h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="Login" ><h6 className={style.text1}>Log in</h6></Nav.Link>
                            <Nav.Link href="Register" >
                                <Button className={style.Tombol}>
                                    Daftar Sekarang
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}