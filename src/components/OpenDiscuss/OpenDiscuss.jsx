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
                                <h6 className={style.text}>Ayo Buka Diskusi </h6>

                            </Col>
                            <Col></Col>
                            <Col className={style.kanan}>
                                <MyVerticallyCenteredModal />

                            </Col>
                        </Row>
                        <Row className={style.space2}>
                            <Col sm={7}></Col>
                            <Col sm={1}>
                                <div>
                                    <h5>#Tag  </h5>

                                </div>

                            </Col>
                            <Col sm={1}>
                                <Image src={gambar} width="150%" className={style.mid} />
                            </Col>
                            <Col sm={3} >
                                <Button className={style.text2}>
                                    <h5>
                                        <Image src={gambar2} width="20%" className={style.unduh} />Unggah
                                    </h5>
                                </Button>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
