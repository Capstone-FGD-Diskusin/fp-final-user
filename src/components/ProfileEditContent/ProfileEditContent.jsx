import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
import GetProfileData from '../../Hooks/GET/GetProfileData';
import Edit from './Edit';
import style from "./ProfileEditContent.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';


// username: stateData?.data.data.Username




export default function ProfileEditContent(props) {
    const stateData = GetProfileData(props)
    // const profile = stateData ? stateData.data.data.Username : null
    // const profile = stateData?.data.data
    // console.log("ini stateData", profile ? profile : null);
    // console.log("ini data", data);
    const USERNAME = stateData?.data.data.Username
    const profile = {
        username: USERNAME,
    }

    const [data, setData] = useState(profile.username)
    const handleChange = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }
    console.log("ini profile", profile ? profile.username : null);
    console.log("ini Data", data ? data : null);

    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (index) => {
        // const newData = Data.filter((e, i) => {
        //     if (i !== index) {
        //         return e

        //     }
        // })
        // setMengikuti(newData)
        // console.log("ini newData", newData);

        const URL = `http://localhost:1234/user/` + index + ``
        Axios.delete(URL, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                history("/Login")
            })
            .catch(error => {
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
    return (
        <div className={style.space} >
            <Container>
                <Row>
                    <Col className={style.mid}>

                        <FiIcons.FiUser size={150} className={style.back} />
                    </Col>
                </Row>
                <Row>
                    <Col className={style.text}>
                        <h2>{stateData ? stateData.data.data.Username : null}</h2>
                    </Col>
                </Row>
                <Container>
                    <Form>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8} className={style.text2}>
                                <Col sm={3}><h4>UserName</h4></Col>
                                <Col sm={9}>
                                    <h4 className={style.posisi}>
                                        <Form.Control
                                            onChange={handleChange}
                                            name="username"
                                            type="text"
                                            // value={data ? data.Username : null}
                                            value={data}
                                            checked={stateData ? stateData.data.data.Username : null}
                                            onChange={(e) => setData(e.target.value)}
                                        // placeholder={stateData ? stateData.data.data.Username : null}
                                        />
                                        {/* <Edit data={stateData.data.data.Username} /> */}
                                    </h4>
                                </Col>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8} className={style.text2}>
                                <Col sm={3}><h4>Email</h4></Col>
                                <Col sm={9}>
                                    <h4 className={style.posisi}>
                                        <Form.Control
                                            // onChange={handleChange}
                                            type="email"
                                            value={stateData ? stateData.data.data.Email : null}
                                        // placeholder={stateData ? stateData.data.data.Username : null}
                                        />
                                    </h4>
                                </Col>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8} className={style.text2}>
                                <Col sm={3}><h4>Phone</h4></Col>
                                <Col sm={9}>
                                    <h4 className={style.posisi}>
                                        <Form.Control
                                            // onChange={handleChange}
                                            type="text"
                                            value={stateData ? stateData.data.data.Phone : null}
                                        // placeholder={stateData ? stateData.data.data.Username : null}
                                        />

                                    </h4>
                                </Col>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8} className={style.text2}>
                                <Col sm={3}><h4>Alamat</h4></Col>
                                <Col sm={9}>
                                    <h4 className={style.posisi}>
                                        <Form.Control
                                            // onChange={handleChange}
                                            type="email"
                                            value={stateData ? stateData.data.data.Alamat : null}
                                        // placeholder={stateData ? stateData.data.data.Username : null}
                                        />
                                    </h4>
                                </Col>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8} className={style.text2}>
                                <Col sm={3}><h4>Gender</h4></Col>
                                <Col sm={9}>
                                    <h4 className={style.posisi}>
                                        <Form.Select className={style.space3}
                                            // onChange={handleChange}
                                            name="genderRegis"
                                            value={stateData ? stateData.data.data.Alamat : null}
                                        >
                                            <option>Gender</option>
                                            <option value="Laki-Laki">Laki-Laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </Form.Select>
                                    </h4>
                                </Col>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>

                        <Row className={style.space2}>
                            <div className={style.midBut}>
                                <Button
                                    onClick={handleShow}
                                >Hapus Profile</Button>
                                <Button >Save Profile</Button>
                            </div>
                        </Row>
                    </Form>
                </Container>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Apakah Profile Ivan akan di Hapus
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => handleDelete(stateData.data.data.ID)}>YES</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div >
    );
}
