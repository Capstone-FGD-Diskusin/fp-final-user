import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import ProfileContent from '../../components/ProfileContent/ProfileContent'
import ThreadProfile from '../../components/ProfileContent/ThreadProfile';

export default function Profile() {
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
                    <Col sm={10}>
                        <ProfileContent />
                        <ThreadProfile />
                    </Col>
                    <Col sm={1}></Col>


                </Row>
            </Container>
        </div>
    )
}
