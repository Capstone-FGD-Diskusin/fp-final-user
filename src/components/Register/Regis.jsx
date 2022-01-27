import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button, Image } from 'react-bootstrap'
import style from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import gambar1 from "../../img/Register.jpg"
import gambar4 from "../../img/logoDiskusiin.png"
import Axios from 'axios';
import swal from 'sweetalert';

const dataRegis = {
    // fileRegis: "",
    usernameRegis: "",
    passwordRegis: "",
    emailRegis: "",
    addressRegis: "",
    phoneRegis: "",
    genderRegis: "",
};
const baseErrors = {
    fileRegis: "",
    usernameRegis: "",
    passwordRegis: "",
    emailRegis: "",
    addressRegis: "",
    phoneRegis: "",

};

export default function Regis() {
    let history = useNavigate();
    const regex = /^[A-Za-z]*$/;

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(dataRegis)
    const [errMsg, setErrMsg] = useState(baseErrors)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        if (name === "usernameRegis") {
            if (regex.test(value)) {
                console.log("1");
                setErrMsg("")
            } else {
                setErrMsg("Nama harus berupa huruf")
            }
        }

        if (name === "passwordRegis") {
            if (value.length > 5) {
                setErrMsg("");
                console.log("3");
            } else {

                setErrMsg(name, "password harus diisi");
            }
        }

        if (name === "emailRegis") {
            if (value.length > 0 && !value.includes("@")) {
                setErrMsg(name, "email kurang @ !");
            } else {
                console.log("2");
                setErrMsg("");
            }
        }

        if (name === "addressRegis") {
            if (value.length > 0) {
                setErrMsg("");
                console.log("4");
            } else {

                setErrMsg(name, "alamat harus diisi");
            }
        }
        if (name === "phoneRegis") {
            if (value.length > 5) {
                setErrMsg("");
                console.log("5");
            } else {
                setErrMsg(name, "nomer anda kurang");
            }
        }


        setData({ ...data, [event.target.name]: event.target.value });
        // console.log(data.usernameRegis);
    }
    // const [validated, setValidated] = useState(false);


    const handleSubmit = async (e) => {
        setValidated(true)
        let isTrue = false;
        let benar = true
        const URL = `http://localhost:1234/user`


        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            await Axios.post(URL,
                {
                    // email: data.fileRegis,
                    username: data.usernameRegis,
                    password: data.passwordRegis,
                    email: data.emailRegis,
                    alamat: data.addressRegis,
                    gender: data.genderRegis,
                    phone: data.phoneRegis,
                }
            )
                .then(res => {
                    console.log(res);
                    // console.log(res.data.token);
                    // dispatch(setToken(res.data.token));
                    if (res) {
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
                history("/Login");
                swal({
                    title: "Success",
                    text: "Register Berhasil",
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



    }


    return (
        <div>
            <Container className={style.space}>
                <Row>
                    <Col sm={7} className={style.space1}>
                        <Image src={gambar1} width="95%" />
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={4}>
                        <h3 className={style.text1}><Image src={gambar4} width="25%" /></h3>
                        <h4 className={style.text2}>Register</h4>

                        <Form onSubmit={handleSubmit}
                            noValidate validated={validated}
                        >
                            {/* <Row className="mb-3">
                                <Form.Group controlId="validationCustom06">
                                    <Form.Control
                                        onChange={handleChange}
                                        value={data.fileRegis}
                                        name="fileRegis"
                                        type="file"
                                        placeholder="Zip"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please input Photo Profile.
                                    </Form.Control.Feedback>
                                </Form.Group> <br />
                            </Row> */}
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        onChange={handleChange}
                                        value={data.usernameRegis}
                                        name="usernameRegis"
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
                                        onChange={handleChange}
                                        value={data.passwordRegis}
                                        name="passwordRegis"
                                        required
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password is Required and need 5 letter
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row >

                            <Row className="mb-3">
                                <Form.Group controlId="validationCustomUsername">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={data.emailRegis}
                                            name="emailRegis"
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Email is Required
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom03">
                                    <Form.Control
                                        onChange={handleChange}
                                        value={data.addressRegis}
                                        name="addressRegis"
                                        type="text"
                                        placeholder="Address"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Address is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom04">
                                    <Form.Control
                                        onChange={handleChange}
                                        value={data.phoneRegis}
                                        name="phoneRegis"
                                        type="number"
                                        placeholder="Phone"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Phone Number is Required and need 6 number
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Select className={style.space3}
                                onChange={handleChange}
                                name="genderRegis"
                                value={data.genderRegis}
                            >

                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </Form.Select>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button className={style.ButDaf} size="lg" onClick={handleSubmit}>
                                    DAFTAR
                                </Button>
                            </div>
                            <div className={style.space2}><h6>Sudah Punya Akun? <Link to={`/Login`} className={style.text3}>Login Disini</Link></h6></div>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}
