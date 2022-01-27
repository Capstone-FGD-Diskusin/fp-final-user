import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import style from "./PeringkatContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';
import { Peringkat } from './Peringkat';
import gambar1 from "../../img/bintang.png"
import GetAllRangking from '../../Hooks/GET/GetAllRangking';


export default function PeringkatContent(props) {
    const state = GetAllRangking(props)
    console.log("state", state ? state.data : null);
    return (
        <div>

            <Container>
                <Row className={style.space4}>
                    <h2 className={style.text}>Peringkat Diskusi</h2>
                </Row>
                {
                    state?.data.data.map((item, index) => {
                        if (item.Role == "moderator" || item.Role == "admin") {
                            return (
                                <div>

                                </div>
                            )
                        } else if (item.Role == "user") {
                            return (
                                <div key={index}>
                                    <Row className={style.box} >
                                        <Col className={style.space3} sm={5}>
                                            <FiIcons.FiUser size={20} className={style.space} />
                                            <h6 className={style.space2}>{item ? item.Username : null}</h6>

                                        </Col>
                                        <Col sm={1}></Col>
                                        <Col sm={3} className={style.space3}>
                                            {/* <Image src={gambar1} width="20px" height="20px" className={style.space5} /> */}
                                            <FcIcons.FcLike size={25} className={style.butLove} />
                                            <h6 className={style.text2}>Like {item ? item.SumLike : null}</h6>
                                        </Col>
                                        <Col sm={3} className={style.space3}>
                                            <BiIcons.BiCommentDetail className={style.space6} size={20} />
                                            <h6 className={style.text3}>{item ? item.SumThread : null} Diskusi</h6>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }
                    })
                }

            </Container>

        </div>
    )
}
