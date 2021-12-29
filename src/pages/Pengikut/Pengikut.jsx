import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import PengikutContent from '../../components/PengikutContent/PengikutContent'

export default function Pengikut() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><PengikutContent /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    )
}
