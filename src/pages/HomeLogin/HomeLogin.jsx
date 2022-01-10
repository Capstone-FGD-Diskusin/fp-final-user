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


export default function HomeLogin() {
    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();
    const URL = `http://34.101.171.217:1234/user`
    console.log("ini token", token);
    useEffect(() => {
        if (token) {
            const getData = async () => {
                Axios.get(URL, {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                    .then(res => {
                        console.log(res);
                        // setProfile(res.data.data);
                        if (res.data.token) {
                            console.log("berhasil")
                        }
                    }).catch(error => {
                        // this.setError()
                        console.log(error)
                        if (error.response) {
                            console.log("--------------------------------------------------")
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            if (error.response.status === 401) {
                                history("/Login");
                                swal({
                                    title: "Error",
                                    text: "Mohon Login Terlebih Dahulu",
                                    icon: "error",
                                });
                            }
                            console.log(error.response.headers);
                        } else if (error.request) {
                            console.log("*************************")

                            // The request was made but no response was received
                            // error.request is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            console.log("++++++++++++++++++++++++")
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    })
            }
            getData();
            // console.log(profile)
        }
    }, []);



    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}> <SearchContent /></Col>
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
