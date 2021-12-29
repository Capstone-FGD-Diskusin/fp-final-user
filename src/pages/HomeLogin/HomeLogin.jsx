import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContentSearch from '../../components/ContentSearch/ContentSearch'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import OpenDiscuss from '../../components/OpenDiscuss/OpenDiscuss'
import ThereadLogin from '../../components/ThreadLogin/ThereadLogin'
import TrendingContent from '../../components/TrendingContent/TrendingContent'


export default function HomeLogin() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}> <ContentSearch /></Col>
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
