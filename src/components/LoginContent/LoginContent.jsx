import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button, Image } from 'react-bootstrap'
import style from './LoginContent.module.css'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import gambar from "../../img/google.png"
import gambar2 from "../../img/facebook.png"
import gambar3 from "../../img/login.png"
import gambar4 from "../../img/logoDiskusiin.png"
import Footer from '../Footer/Footer';
import Axios from 'axios';
import swal from 'sweetalert';

import { setPassword, setUsername, setToken } from '../../store/slice';

const dataLogin = {
    username: "",
    password: "",
};

export default function LoginContent() {
    let history = useNavigate();
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(dataLogin)


    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data.username);
        console.log(data.password);
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        console.log(data);
        let isTrue = false;
        const URL = `http://34.101.171.217:1234/user/login`
        await Axios.post(URL,
            {
                email: data.username,
                password: data.password,
            })
            .then(res => {
                console.log(res);
                console.log(res.data.token);
                dispatch(setToken(res.data.token));
                if (res.data.token) {
                    console.log("berhasil")
                    isTrue = true;
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

        if (isTrue) {
            console.log()
            // dispatch(login(res))
            // if (role == moderator) {
            //     history("/Login/HomeLoginModerator");
            // } else {
            //     history("/Login/HomeLogin");
            // }
            history("/Login/HomeLogin");
            swal({
                title: "Success",
                text: "Login Berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "Password atau Email salah",
                icon: "error",
            });
            // e.preventDefault();
        }
    }

    // const handleSubmit = (event) => {
    //     // console.log(data);
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     setValidated(true);
    //     dispatch(setUsername(data.username))
    //     dispatch(setPassword(data.password))

    // console.log(data, "ini submit");
    // }
    return (

        <div>
            <Container className={style.space}>
                <Row>
                    <Col sm={7}>
                        <Image src={gambar3} width="90%" className={style.space4} />
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={4}>
                        <h3 className={style.text1}><Image src={gambar4} width="25%" /></h3>
                        <h4 className={style.text2}>Masuk</h4>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        onChange={handleChange}
                                        value={data.username}
                                        name="username"
                                        required
                                        type="text"
                                        placeholder="Username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Username is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        onChange={handleChange}
                                        name="password"
                                        value={data.password}
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row >
                            <div className="d-grid gap-2" >
                                <Button className={style.ButDaf} size="lg" onClick={handleSubmit}>
                                    {/* <Link to={`/Login/HomeLogin`} > MASUK </Link> */}
                                    MASUK
                                </Button>
                            </div>
                        </Form>
                        <div className={style.space2}><h6>Lupa Kata Sandi? <Link to={`/CekLogin`} className={style.text3}>Klik Disini</Link></h6></div>
                        <div className={style.mid}><h6 className={style.space3}>----------------Atau Masuk Dengan----------------</h6></div>
                        <div className="d-grid gap-2">
                            <Button className={style.butGo} size="lg" >
                                <Image src={gambar} width="8%" className={style.google} /> Google
                            </Button>
                        </div> <br />

                        <div className="d-grid gap-2">
                            <Button className={style.butGo} size="lg">
                                <Image src={gambar2} width="4%" className={style.google} /> Facebook
                            </Button>
                        </div>
                        <div className={style.space2}><h6>Tidak Punya Akun? <Link to={`/Register`} className={style.text3}>Daftar Disini</Link></h6></div>
                        <br />
                        <div ><Footer /></div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
