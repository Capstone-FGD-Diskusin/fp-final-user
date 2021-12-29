import React from 'react'
import style from "./InputComment.module.css"
import { useParams, Link } from 'react-router-dom'
import { ThreadLoginData } from '../ThreadLogin/ThreadLoginData';
import { Button, Col, Container, Image, Row, InputGroup, FormControl } from 'react-bootstrap'
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import gambar from "../../img/Spiderman.png"
import gambar2 from "../../img/love.png"
import gambar3 from "../../img/pesawat.png"

export default function InputComment() {
    const { id } = useParams();
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
                                <Row>
                                    <Col className={style.posisi}>
                                        <h6>
                                            <Image src={gambar2} width="40%" classname={style.space6} />
                                            {item.like}
                                        </h6>
                                        <h6>
                                            <Link to={`/Login/HomeLogin/${item.Id}/Comment`}><BiIcons.BiCommentDetail /></Link>
                                            {item.comment}
                                        </h6>
                                        <FiIcons.FiShare2 />

                                    </Col>
                                    <Col></Col>
                                    <Col><h6 className={style.kanan}>{item.Kategori}</h6></Col>
                                </Row>

                            </Container>

                            <Container className={style.space7}>
                                {/* <InputGroup>
                                    <FormControl className={style.input} */}
                                <Row className={style.box}>
                                    <Col sm={1} className={style.space8}><BiIcons.BiCommentDetail /></Col>
                                    <Col sm={9} className={style.space9}>

                                        <h6 className={style.text1}><input variant="light" className={style.input} type="text" placeholder="Lorem Ipsum is simply dummy text of the printing and" /> </h6>
                                    </Col>
                                    <Col sm={2}>
                                        <Button variant="" className={style.mid2} >
                                            <Image src={gambar3} className={style.img} />
                                        </Button>
                                    </Col>
                                </Row>

                                {/* </InputGroup> */}
                            </Container>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
