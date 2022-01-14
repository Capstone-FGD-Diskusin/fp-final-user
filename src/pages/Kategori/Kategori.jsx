import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ModeratorContent from '../../components/ModeratorContent/ModeratorContent'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import SearchContent from '../../components/SearchContent/SearchContent'
import ThereadKategori from '../../components/Thread/ThereadKategori'
import TrendingContent from '../../components/TrendingContent/TrendingContent'


export default function Kategori() {
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}> <SearchContent /></Col>
                    <Col sm={6}>
                        <ThereadKategori />
                    </Col>
                    <Col sm={3}><ModeratorContent /></Col>
                </Row>
            </Container>

        </div>
    )
}
