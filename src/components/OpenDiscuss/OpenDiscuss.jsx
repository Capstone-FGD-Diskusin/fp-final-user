import React, { useRef } from 'react'
import { Button, Col, Container, Image, Row, Form, FloatingLabel, Modal } from 'react-bootstrap'
import style from "./OpenDisucuss.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import gambar from "../../img/iamge.png"
import gambar2 from "../../img/unduh.png"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, } from 'react';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';
import GetAllCategory from '../../Hooks/GET/GetAllCategory';

import MyVerticallyCenteredModal from './PopUp';
import { SearchKategori } from '../SearchContent/SearchKategori';

export default function OpenDiscuss(props) {
    const state = GetAllCategory(props)
    const token = useSelector((state) => state.dataUser.token)
    const file = useRef(null);

    const dataThread = {
        title: "",
        thread: "",
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

    // const handleUpload = (event) => {

    // }

    // const handleImg = (event) => {
    //     console.log(file.current.files);
    //     const formData = new FormData();
    //     Object.values(file.current.files).forEach((item) => {
    //         formData.append('file', item);
    //     });
    // }

    const handleUpload = async (event) => {
        console.log(data);
        console.log(token);

        let isTrue = false;
        const URL = `http://34.101.171.217:1234/thread`
        // event.preventDefault()
        await Axios.post(URL, {
            title: data.title,
            description: data.thread,
            category_name: data.kategori,
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
    };
    //file.current.files
    // console.log(file.current.files);
    // const formData = new FormData();
    // Object.values(file.current.files).forEach((item) => {
    //     formData.append('file', item);
    // });
    // fetch(
    //     `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/upload`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             Authorization: 'Bearer token...',
    //         },
    //         body: formData,
    //     }
    // )
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((result) => {
    //         console.log(result.name);
    //         return result.fullName;
    //     })
    //     .catch((error) => {
    //         return 'gagal';
    //     });


    return (
        <div>
            <div className={style.space}>
                <div >
                    <Container>
                        <Form onSubmit={handleUpload}>
                            <Form.Control
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                className={style.inputText}
                                type="text"
                                label="Title"
                                placeholder="Title"
                            />
                            <Form.Control
                                name="thread"
                                value={data.thread}
                                onChange={handleChange}
                                className={style.thread}
                                as="textarea"
                                label="Ayo Buka Diskusi..."
                                placeholder="Ayo Buka Diskusi..."

                            />
                            <Row >
                                <Col sm={5}></Col>
                                <Col className={style.unggah}>
                                    {/* <h6 ><MyVerticallyCenteredModal width="5px" /></h6> */}
                                    {/* <Image src={gambar} width="35px" height="35px" /> */}
                                    {/* <div className={style.image}>
                                        <label for="file-input">
                                            
                                            <img src={gambar} width="30px" />
                                        </label>
                                        <input
                                            id="file-input"
                                            type="file"
                                            ref={file}
                                            onChange={handleImg}
                                        />
                                    </div> */}
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

                                    {/* <MyVerticallyCenteredModal props={data} /> */}
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
                                            <Modal.Title>Thread</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>Title : {data.title}</h5>
                                            <h6>Kategori : {data.kategori}</h6>
                                            <h6>Thread :</h6>
                                            {data.thread}
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

                                    {/* <Button className={style.text2} onClick={() => handleUpload()}>

                                        <h6 className={style.posisi}>
                                            <Image src={gambar2} width="15px" height="15px" className={style.unduh} />
                                            Upload
                                        </h6>
                                    </Button> */}
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )
}
