import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import PeringkatContent from '../../components/PeringkatContent/PeringkatContent'


export default function Peringkat() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><PeringkatContent /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </div>
    )
}
