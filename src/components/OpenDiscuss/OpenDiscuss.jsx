import React, { useRef } from 'react'
import { Button, Col, Container, Image, Row, Form, FloatingLabel, Modal } from 'react-bootstrap'
import style from "./OpenDisucuss.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import gambar from "../../img/iamge.png"
import gambar2 from "../../img/unduh.png"
import { useState, } from 'react';

import MyVerticallyCenteredModal from './PopUp';
import { SearchKategori } from '../SearchContent/SearchKategori';

export default function OpenDiscuss() {

    const file = useRef(null);

    const dataThread = {
        thread: "",
        img: "",
        kategori: "",
    }

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

    const handleImg = (event) => {
        console.log(file.current.files);
        const formData = new FormData();
        Object.values(file.current.files).forEach((item) => {
            formData.append('file', item);
        });
    }

    const handleUpload = (event) => {
        //file.current.files
        console.log(file.current.files);
        const formData = new FormData();
        Object.values(file.current.files).forEach((item) => {
            formData.append('file', item);
        });
        fetch(
            `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/upload`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer token...',
                },
                body: formData,
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result.name);
                return result.fullName;
            })
            .catch((error) => {
                return 'gagal';
            });
    };

    return (
        <div>
            <div className={style.space}>
                <div >
                    <Container>
                        <Form>
                            <Form.Control
                                name="thread"
                                value={data.thread}
                                onChange={handleChange}
                                className={style.thread}
                                as="textarea"
                                label="Ayo Buka Diskusi..."
                                placeholder="Leave a comment here"

                            />
                            <Row >
                                <Col sm={5}></Col>
                                <Col className={style.unggah}>
                                    {/* <h6 ><MyVerticallyCenteredModal width="5px" /></h6> */}
                                    {/* <Image src={gambar} width="35px" height="35px" /> */}
                                    <div className={style.image}>
                                        <label for="file-input">
                                            {/* <Image src={gambar} /> */}
                                            <img src={gambar} width="30px" />
                                        </label>
                                        <input
                                            id="file-input"
                                            type="file"
                                            ref={file}

                                            // value={data.img}
                                            // name="img"
                                            onChange={handleImg}
                                        />
                                    </div>
                                    <Form.Select className={style.texts}
                                        onChange={handleChange}
                                        name="kategori"
                                        value={data.kategori}
                                    >
                                        <option>Kategori</option>
                                        <option value="Hiburan">Hiburan</option>
                                        <option value="Politik">Politik</option>
                                        <option value="Gaya Hidup">Gaya Hidup</option>
                                        <option value="Kesehatan mental">Kesehatan mental</option>
                                        <option value="Olahraga">Olahraga</option>
                                        <option value="Game">Game</option>

                                    </Form.Select>

                                    {/* <MyVerticallyCenteredModal props={data} /> */}
                                    <Button className={style.text2} onClick={handleShow}>
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
                                            {data.thread}
                                            <br />
                                            <h6>Kategori : {data.kategori}</h6>
                                            <br />
                                            {/* {file.current.files} */}

                                            {
                                                (file.current?.files?.length ? <img src={URL.createObjectURL(file.current?.files[0])} alt="" /> : null)
                                            }

                                            {/* <img src={URL.createObjectURL(file.current.files)} alt="" /> */}


                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={() => handleUpload()}>
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
