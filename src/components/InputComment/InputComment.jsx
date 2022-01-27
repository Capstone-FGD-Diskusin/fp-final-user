import React from 'react'
import style from "./InputComment.module.css"
import { useParams, Link, useNavigate } from 'react-router-dom'
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
import GetAllThread from '../../Hooks/GET/GetAllThread';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';


export default function InputComment(props) {
    const token = useSelector((state) => state.dataUser.token)
    const { id } = useParams();

    const dataBalasan = {
        Balasan: "",
    }

    let history = useNavigate()
    const state = GetAllThread(props)
    const files = state?.data.data[id]
    // console.log("ini state", state ? state : null);
    // console.log("ini files", files ? files : null);

    const [data, setBalasan] = useState(dataBalasan)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (event) => {
        setBalasan({ ...data, [event.target.name]: event.target.value })
        // console.log(event.target.value);
    }

    const handleUpload = async (event) => {
        // console.log(event.target.value);
        // console.log(token);

        let isTrue = false;
        const URL = `http://34.101.171.217:1234/thread/comment`
        // event.preventDefault()
        await Axios.post(URL, {
            comment: data.Balasan,
            thread_id: files.ID,
            comment_id: 1,
            threadID: id
        }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                // console.log("ini res", res);
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
    // return (
    //     <></>
    // )
    return (
        <div>
            <div className={style.space}>
                {/* {files.filter(item => item.ID == id).map((item, index) => {
                    return ( */}
                <div >
                    <Container className={style.space7}>
                        <Row>
                            <Col sm={6} className={style.posisi}>
                                <FiIcons.FiUser size={25} />
                                <h6 className={style.space2}>{files ? files.UserName : null}</h6>
                                <h6 className={style.space3}><Button variant="" className={style.butIkut}>Ikuti</Button></h6>
                            </Col>
                            <Col sm={3}></Col>
                            <Col sm={3}></Col>
                        </Row>
                        <Row className={style.box}>
                            <div >
                                <h6 className={style.space12}>
                                    {files ? files.Title : null}
                                </h6>
                                <Col className={style.mid}><Image src={files ? files.ImgUrl : null} width="80%" /></Col>
                            </div>
                            <div>
                                <Row>
                                    <Col sm={1}></Col>
                                    <Col sm={10}>

                                        <h6 className={style.space4}>
                                            {files ? files.Description : null}
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
                                    <h6 className={style.space8}>{files ? files.Like : null}</h6>
                                    <BiIcons.BiCommentDetail size={20} className={style.space10} />

                                    <h6 className={style.space8}>{files ? files.JumlahComment : files}</h6>
                                    <FiIcons.FiShare2 className={style.space11} />
                                </div>
                                <Link to={`/Login/HomeLogin/${files ? files.CategoryName : files}`} className={style.text}><h6 >{files ? files.CategoryName : files}</h6></Link>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={style.space7}>
                        <Row className={style.box}>
                            <Col sm={1} className={style.space12}><BiIcons.BiCommentDetail size={30} /></Col>
                            <Col sm={9} className={style.space13}>
                                <h6 className={style.text1}>
                                    <Form.Control
                                        variant="light"
                                        as="textarea"
                                        className={style.comment}
                                        onChange={handleChange}
                                        // value={data.Balasan}
                                        name="Balasan"
                                        placeholder="Normal text"
                                    />
                                </h6>
                            </Col>
                            <Col sm={2}>
                                <Button variant="" className={style.mid2} >

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
                            <h5>{files ? files.Title : null}</h5>
                            <Image src={files ? files.ImgUrl : null} />
                            {files ? files.Description : null}
                            <br /> <br />
                            <h6>Balasan : {data.Balasan} </h6>
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
                {/* )
                })} */}
            </div>
        </div>
    )
}
