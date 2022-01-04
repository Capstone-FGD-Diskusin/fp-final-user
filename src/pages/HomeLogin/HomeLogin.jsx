import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import OpenDiscuss from '../../components/OpenDiscuss/OpenDiscuss'
import SearchContent from '../../components/SearchContent/SearchContent'
import ThereadLogin from '../../components/Thread/ThereadLogin'
import TrendingContent from '../../components/TrendingContent/TrendingContent'


export default function HomeLogin() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}> <SearchContent /></Col>
                    <Col sm={6}>
                        <OpenDiscuss />
                        <ThereadLogin />
                    </Col>
                    <Col sm={3}><TrendingContent /></Col>
                </Row>
            </Container>

        </div>
    )
}
