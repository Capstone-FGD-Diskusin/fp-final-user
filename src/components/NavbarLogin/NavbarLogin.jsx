import React from 'react'
import style from './NavbarLogin.module.css'
import { Container, Navbar, Nav, NavDropdown, Image, Button, ImageDropdown, Dropdown } from 'react-bootstrap'
import gambar from "../../img/profile.png"
import gambar2 from "../../img/settings.png"
// import { ImOffice } from "react-icons/im";

export default function NavbarLogin() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className={style.back} >
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home"> <b className={style.text2}>LOGO</b> </Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="#Beranda" className={style.spaceNav}>Beranda</Nav.Link>
                            <Nav.Link href="#Mengikuti">Mengikuti</Nav.Link>
                            <Nav.Link href="#Trend">Trend Untuk Anda</Nav.Link>

                        </Nav>
                        <Nav>
                            <Dropdown >
                                <Dropdown.Toggle className={style.background} variant="light" >
                                    <Image src={gambar2} className={style.posisi} width="35%"></Image>
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link href="#deets"> More
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Image src={gambar} width="30%">

                                </Image>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    )
}
