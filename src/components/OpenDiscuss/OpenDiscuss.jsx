import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import style from "./OpenDisucuss.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import gambar from "../../img/iamge.png"
import gambar2 from "../../img/unduh.png"
import { useState, } from 'react';

import MyVerticallyCenteredModal from './PopUp';

export default function OpenDiscuss() {
    return (
        <div>
            <div className={style.space}>
                <div >
                    <Container>
                        <Row className={style.add}>
                            <Col>
                                <textarea className={style.input} placeholder="Ayo Buka Diskusi..."></textarea>
                            </Col>
                            <Col></Col>
                            <Col className={style.kanan}>
                                <MyVerticallyCenteredModal width="5px" />
                            </Col>
                        </Row>

                        <Row >
                            <Col className={style.unggah}>
                                <h6 >as</h6>
                                <Image src={gambar} width="35px" height="35px" className={style.mid} />
                                <Button className={style.text2}>
                                    <h6 className={style.posisi}>
                                        <Image src={gambar2} width="15px" height="15px" className={style.unduh} />
                                        Upload
                                    </h6>
                                </Button>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
