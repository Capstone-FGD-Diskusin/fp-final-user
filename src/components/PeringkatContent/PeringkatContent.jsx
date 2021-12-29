import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import style from "./PeringkatContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { Peringkat } from './Peringkat';
import gambar1 from "../../img/bintang.png"


export default function PeringkatContent() {
    return (
        <div>

            <Container>
                <Row className={style.space4}>
                    <h2 className={style.text}>Orang Yang Anda Ikuti</h2>
                </Row>
                {
                    Peringkat.map((item, index) => {
                        // const lvl = [item.lvl]
                        // lvl.sort()

                        // console.log("level i", lvl);
                        return (
                            <div key={index}>
                                <Row className={style.box} >
                                    <Col className={style.space3} sm={5}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6 className={style.space2}>{item.Name}</h6>

                                    </Col>
                                    <Col sm={1}></Col>
                                    <Col sm={3} className={style.space3}>
                                        <Image src={gambar1} width="20px" height="20px" className={style.space5} />
                                        <h6 className={style.text2}>lvl {item.lvl}</h6>
                                    </Col>
                                    <Col sm={3} className={style.space3}>
                                        <BiIcons.BiCommentDetail className={style.space6} size={20} />
                                        <h6 className={style.text3}>{item.diskusi} Ribu Diskusi</h6>
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
