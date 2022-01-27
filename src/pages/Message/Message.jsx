import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import SearchContent from '../../components/SearchContent/SearchContent'
import TrendingContent from '../../components/TrendingContent/TrendingContent'
import MessageContent from '../../components/MessageContent/MessageContent'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import Axios from 'axios';
import { useState } from 'react'

export default function Message() {
    const token = useSelector((state) => state.dataUser.token)

    // localhost: 1234 / all_user
    const URL = `http://34.101.171.217:1234/user`
    let history = useNavigate();
    const i = 0

    const [state, setState] = useState(null)
    // useEffect(() => {
    //     if (i == 0) {
    //         getData();
    //         // console.log(profile)
    //     }
    // },
    //     []);

    console.log("ini state", state);

    useEffect(() => {
        if (state ? state.data.data.Role == "moderator" : null) {
            history("/Login/HomeLogin/Message");
            console.log("anda moderaotr");
        } else if (state ? state.data.data.Role != "moderator" : null) {
            history("/Login/HomeLogin");
            console.log("anda bukan moderator");
        }
    },
        [state]);

    useEffect(() => {
        const getData = async () => {
            Axios.get(URL, {
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then(res => {
                    console.log("ini", res);
                    setState(res)

                    // setProfile(res.data.data);
                    if (res) {
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
        getData()
        console.log("ini state", state)

        if (token == "") {
            history("/Login");
            console.log("ini kosong");
        }
        // if (state ? state.data.data.Role == "moderator" : null) {
        //     history("/Login/HomeLogin/Message");
        //     console.log("anda moderaotr");
        // } else if (state ? state.data.data.Role != "moderator" : null) {
        //     console.log("anda bukan moderator");
        // }

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
