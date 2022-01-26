import React, { useRef } from 'react';
import { Button, Col, Container, Image, Row, Form, FloatingLabel, Modal } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, } from 'react';
import style from "./MessageContent.module.css"
import { useSelector } from 'react-redux'
import Axios from 'axios';
import gambar2 from "../../img/unduh.png"
import swal from 'sweetalert';
import GetAllCategory from '../../Hooks/GET/GetAllCategory';

export default function MessageContent(props) {
    const token = useSelector((state) => state.dataUser.token)
    const file = useRef(null);
    const state = GetAllCategory(props)
    // console.log(state.data.data);

    const dataThread = {
        title: "",
        pesan: "",
        // img: "",
        kategori: "",
    }
    let history = useNavigate();
    const [data, setData] = useState(dataThread)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        // console.log("string");
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(event.target.value);
        // console.log("event name", event.target.name);
        // console.log("event target", event.target.value);
    }

    const handleUpload = async (event) => {
        console.log(data);
        console.log(token);

        let isTrue = false;
        const URL = `http://localhost:1234/message`
        // event.preventDefault()
        await Axios.post(URL, {
            text: "data.pesan",
            category_name: "data.kategori",
            admin_id: 5
        }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                console.log("ini res", res);
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
            history("/Login/HomeLogin");
            swal({
                title: "Success",
                text: "Input Thread Berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "ERROR",
                icon: "error",
            });
            // e.preventDefault();
        }
    }
    return (
        <div>
            <Container>
                <h2 className={style.text3}>SEND MESSAGE TO ADMIN</h2>
                <Form
                // onSubmit={handleUpload}
                >
                    <Row>
                        <Col>
                            <Form.Control
                                name="pesan"
                                value={data.pesan}
                                onChange={handleChange}
                                className={style.thread}
                                as="textarea"
                                label="Ayo Buka Diskusi..."
                                placeholder="Ayo Buka Diskusi..."

                            />
                            <Form.Select className={style.texts}
                                onChange={handleChange}
                                name="kategori"
                                value={data.kategori}
                            >
                                <option>Kategori</option>
                                {
                                    state?.data.data.map((item, index) => {
                                        return (
                                            <>

                                                <option value={item ? item.Name : null}>{item ? item.Name : null}</option>
                                            </>
                                        )
                                    })
                                }
                            </Form.Select>
                            <Button
                                className={style.text2}
                                onClick={handleShow}
                            // onClick={() => handleUpload()}
                            // onClick={handleUpload}
                            >
                                <h6 className={style.posisi}>
                                    <Image src={gambar2} width="15px" height="15px" className={style.unduh} />
                                    Upload
                                </h6>
                            </Button>
                            <Modal show={show} onHide={handleClose} animation={false}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Pesan Untuk Admin</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Pesan: {data.pesan}</h5>
                                    <h6>Kategori : {data.kategori}</h6>

                                    <br />

                                    <br />
                                    {/* {file.current.files} */}

                                    {/* {
                                                (file.current?.files?.length ? <img src={URL.createObjectURL(file.current?.files[0])} alt="" /> : null)
                                            } */}

                                    {/* <img src={URL.createObjectURL(file.current.files)} alt="" /> */}


                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={() => handleUpload()}
                                    // onClick={handleUpload}
                                    >
                                        Upload Thread
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div >
    );
}
