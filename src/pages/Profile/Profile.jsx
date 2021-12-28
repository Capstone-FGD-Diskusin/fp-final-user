import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import ProfileContent from '../../components/ProfileContent/ProfileContent'

export default function Profile() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}><ProfileContent /></Col>
                    <Col sm={1}></Col>


                </Row>
            </Container>
        </div>
    )
}
