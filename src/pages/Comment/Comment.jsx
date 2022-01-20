import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SearchContent from '../../components/SearchContent/SearchContent'
import InputComment from '../../components/InputComment/InputComment'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import TrendingContent from '../../components/TrendingContent/TrendingContent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Comment() {
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
                    <Col sm={3}><SearchContent /></Col>
                    <Col sm={6}>
                        <InputComment />
                    </Col>
                    <Col sm={3}><TrendingContent /></Col>
                </Row>
            </Container>
        </div>
    )
}
