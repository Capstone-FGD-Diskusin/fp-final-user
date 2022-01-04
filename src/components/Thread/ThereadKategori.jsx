import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import style from "./ThereadLogin.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import gambar from "../../img/Spiderman.png"
import gambar2 from "../../img/love.png"
import { ThreadLoginData } from './ThreadLoginData';
import { Link, useParams } from 'react-router-dom';

export default function ThereadKategori() {
    const { id } = useParams();

    return (
        <>
            <div className={style.space}>
                {ThreadLoginData.filter(item => item.Kategori == id).map((item, index) => {
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

                        </div>
                    )
                })}
            </div>
        </>
    )
}
