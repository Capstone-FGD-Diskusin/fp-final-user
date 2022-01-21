import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import OpenDiscuss from '../../components/OpenDiscuss/OpenDiscuss'
import SearchContent from '../../components/SearchContent/SearchContent'
import ThereadLogin from '../../components/Thread/ThereadLogin'
import TrendingContent from '../../components/TrendingContent/TrendingContent'
import Axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom'
import ThreadMengikutiContent from '../../components/Thread/ThreadMengikutiContent'


export default function ThreadMengikuti() {
    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();

    const URL = `http://localhost:1234/user`
    // console.log("ini token", token);
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
                        {/* <OpenDiscuss /> */}
                        <ThreadMengikutiContent />
                    </Col>
                    <Col sm={3}><TrendingContent /></Col>
                </Row>
            </Container>
        </div>
    )
}
