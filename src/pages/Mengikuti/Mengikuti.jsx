import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MengikutiContent from '../../components/MengikutiContent/MengikutiContent'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'


export default function Mengikuti() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><MengikutiContent /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </div>
    )
}
