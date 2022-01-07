import React from 'react'
import { Button, Col, Container, Image, Row, Form, FloatingLabel } from 'react-bootstrap'
import style from "./OpenDisucuss.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import gambar from "../../img/iamge.png"
import gambar2 from "../../img/unduh.png"
import { useState, } from 'react';

import MyVerticallyCenteredModal from './PopUp';
import { SearchKategori } from '../SearchContent/SearchKategori';

export default function OpenDiscuss() {

    const dataThread = {
        thread: "",
        img: "",
        tag: "",
        kategori: "",
        tag: "",
    }

    const [data, setData] = useState()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {

    }

    return (
        <div>
            <div className={style.space}>
                <div >
                    <Container>
                        <Form>
                            <Form.Control
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

                                    <Form.Select className={style.texts}>
                                        <option>Kategori</option>
                                        <option value="1">Hiburan</option>
                                        <option value="2">Politik</option>
                                        <option value="3">Gaya Hidup</option>
                                        <option value="4">Kesehatan mental</option>
                                        <option value="5">Olahraga</option>
                                        <option value="6">Game</option>

                                    </Form.Select>
                                    {/* <Image src={gambar} width="35px" height="35px" /> */}
                                    <Form.Group className="position-relative mb-3">
                                        {/* <Image src={gambar} width="35px" height="35px" />
                                        <Button
                                            type="file"
                                            required
                                            name="file"
                                        >
                                            <Image src={gambar} width="35px" height="35px" />
                                        </Button> */}
                                        <Form.Control
                                            className={style.img}
                                            type="file"
                                            required
                                            name="file"
                                            onChange={handleChange}
                                        // isInvalid={!!errors.file}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {/* {errors.file} */}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className={style.text2} onClick={handleSubmit}>
                                        <h6 className={style.posisi}>
                                            <Image src={gambar2} width="15px" height="15px" className={style.unduh} />
                                            Upload
                                        </h6>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )
}
