import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProfileEditContent from '../../components/ProfileEditContent/ProfileEditContent';
import { useEffect } from 'react';

export default function ProfileEdit() {
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
                    <Col sm={1}></Col>
                    <Col sm={10}><ProfileEditContent /></Col>
                    <Col sm={1}></Col>


                </Row>
            </Container>
        </div>
    )
}
