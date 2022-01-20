import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MengikutiContent from '../../components/MengikutiContent/MengikutiContent'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Mengikuti() {
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
                    <Col sm={2}></Col>
                    <Col sm={8}><MengikutiContent /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </div>
    )
}
