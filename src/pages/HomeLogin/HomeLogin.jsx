import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContentSearch from '../../components/ContentSearch/ContentSearch'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'

export default function HomeLogin() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col> <ContentSearch /></Col>
                    <Col>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    )
}
