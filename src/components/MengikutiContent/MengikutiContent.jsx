import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from "./MengikutiContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Mengikuti } from './Mengikuti';

export default function MengikutiContent() {
    return (
        <div>

            <Container>
                <Row className={style.space4}>
                    <h2 className={style.text}>Orang Yang Anda Ikuti</h2>
                </Row>
                {
                    Mengikuti.map((item, index) => {
                        return (
                            <div key={index}>
                                <Row className={style.box} >
                                    <Col className={style.space3} sm={9}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6 className={style.space2}>{item.Name}</h6>

                                    </Col>
                                    <Col sm={3}>
                                        <Button className={style.butFol}><h6 className={style.text2}>Mengikuti</h6></Button>
                                    </Col>

                                </Row>
                            </div>
                        )
                    })
                }

            </Container>

        </div>
    )
}