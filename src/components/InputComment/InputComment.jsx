import React from 'react'
import style from "./InputComment.module.css"
import { useParams, Link } from 'react-router-dom'
import { ThreadLoginData } from '../Thread/ThreadLoginData';
import { Button, Col, Container, Image, Row, InputGroup, FormControl, Form, Modal } from 'react-bootstrap'
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { useState, } from 'react';
// import * as ioIcons from 'react-icons/io';
import gambar from "../../img/Spiderman.png"
import gambar2 from "../../img/love.png"
import gambar3 from "../../img/pesawat.png"

export default function InputComment() {
    const { id } = useParams();

    const dataBalasan = {
        Balasan: "",
    }

    const [data, setBalasan] = useState(dataBalasan)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (event) => {
        setBalasan({ ...data, [event.target.name]: event.target.value })
    }

    const handleUpload = (event) => {

    }

    return (
        <div>
            <div className={style.space}>
                {ThreadLoginData?.filter(item => item.Id == id).map((item, index) => {
                    return (
                        <div key={index}>
                            <Container className={style.space7}>
                                <Row>
                                    <Col sm={6} className={style.posisi}>
                                        <FiIcons.FiUser size={25} />
                                        <h6 className={style.space2}>{item.Name}</h6>
                                        <h6 className={style.space3}><Button variant="" className={style.butIkut}>Ikuti</Button></h6>
                                    </Col>
                                    <Col sm={3}></Col>
                                    <Col sm={3}></Col>
                                </Row>
                                <Row className={style.box}>
                                    <div >
                                        <Col className={style.mid}><Image src={item.Image} width="80%" /></Col>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col sm={1}></Col>
                                            <Col sm={10}>
                                                <h6 className={style.space4}>
                                                    {item.Comment}
                                                </h6>
                                            </Col>
                                            <Col sm={1}></Col>
                                        </Row>
                                    </div>
                                </Row>
                                <Row >
                                    <Col className={style.bag}>
                                        <div className={style.det}>

                                            <Image src={gambar2} width="20px" height="20px" />
                                            <h6 className={style.space8}>{item.like}</h6>
                                            <Link to={`/Login/HomeLogin/${item.Id}/Comment`} className={style.space9}><BiIcons.BiCommentDetail size={20} className={style.space10} /></Link>
                                            <h6 className={style.space8}>{item.comment}</h6>
                                            <FiIcons.FiShare2 className={style.space11} />

                                        </div>
                                        <Link to={`/Login/HomeLogin/${item.Kategori}`} className={style.text}><h6 >{item.Kategori}</h6></Link>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className={style.space7}>
                                <Row className={style.box}>
                                    <Col sm={1} className={style.space12}><BiIcons.BiCommentDetail size={30} /></Col>
                                    <Col sm={9} className={style.space13}>

                                        <h6 className={style.text1}>
                                            {/* <input variant="light" className={style.input} type="text" placeholder="Lorem Ipsum is simply dummy text of the printing and" /> */}
                                            <Form.Control
                                                variant="light"
                                                as="textarea"
                                                className={style.comment}
                                                onChange={handleChange}
                                                value={data.Balasan}
                                                name="Balasan"
                                                placeholder="Normal text"
                                            />
                                        </h6>
                                    </Col>
                                    <Col sm={2}>
                                        <Button variant="" className={style.mid2} >
                                            {/* <Image src={gambar3} className={style.img} /> */}
                                            <FaIcons.FaRegPaperPlane size={30} onClick={handleShow} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>

                            <Modal show={show} onHide={handleClose} animation={false}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Thread</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {item.Comment}
                                    <br /> <br />
                                    <h6>Balasan : </h6>
                                    {/* <img src="ref" alt="" /> */}

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={() => handleUpload()}>
                                        Upload Comment
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
