import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import PeringkatContent from '../../components/PeringkatContent/PeringkatContent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Peringkat() {
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
                    <Col sm={8}><PeringkatContent /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </div>
    )
}
