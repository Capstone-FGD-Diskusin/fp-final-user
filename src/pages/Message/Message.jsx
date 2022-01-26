import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import SearchContent from '../../components/SearchContent/SearchContent'
import TrendingContent from '../../components/TrendingContent/TrendingContent'
import { useNavigate } from 'react-router-dom'
import MessageContent from '../../components/MessageContent/MessageContent'


export default function Message() {
    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();
    useEffect(() => {
        if (token == "") {
            history("/Login");
            console.log("ini kosong");
        }
    }, [token])


    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}> <SearchContent /></Col>
                    <Col sm={6}>
                        <MessageContent />
                    </Col>
                    <Col sm={3}><TrendingContent /></Col>
                </Row>
            </Container>

        </div>
    )
}
