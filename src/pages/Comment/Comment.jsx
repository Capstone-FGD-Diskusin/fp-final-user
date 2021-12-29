import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContentSearch from '../../components/ContentSearch/ContentSearch'
import InputComment from '../../components/InputComment/InputComment'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import TrendingContent from '../../components/TrendingContent/TrendingContent'

export default function Comment() {
    return (
        <div>
            <NavbarLogin />

            <Container>
                <Row>
                    <Col sm={3}><ContentSearch /></Col>
                    <Col sm={6}>
                        <InputComment />
                    </Col>
                    <Col sm={3}><TrendingContent /></Col>
                </Row>
            </Container>
        </div>
    )
}
