import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import style from "./ProfileContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import gambar from "../../img/bintang.png"
import { Link } from 'react-router-dom';
import { ThreadLoginData } from '../Thread/ThreadLoginData';
import ThereadLogin from '../Thread/ThereadLogin';
import ThereadProfile from './ThreadProfile';
import ThreadProfile from './ThreadProfile';
import GetProfileData from '../../Hooks/GET/GetProfileData';

export default function ProfileContent(props) {
    const state = GetProfileData(props)
    // console.log(state);

    return (
        <div>
            <Container>
                <Row className={style.space}>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                        <FiIcons.FiUser className={style.profile} />
                    </Col>
                    <Col sm={1}></Col>
                    <Col >
                        <Row>
                            <Col><h1 className={style.space2}>
                                {console.log(state ? state.data.data.Username : null)}
                                {
                                    state ? state.data.data.Username : null
                                }
                            </h1></Col>
                        </Row>

                        <Row>
                            <Col className={style.bag}>
                                <Image src={gambar} width="25px" height="25px" className={style.img} />
                                <h6 className={style.text}>{state ? state.data.data.Username : null}</h6>

                                <h6 className={style.text2}>10</h6>
                                <Link to={`/Login/HomeLogin/Profile/Mengikuti`} className={style.text3}>
                                    <h6>Mengikuti</h6>
                                </Link>

                                <h6 className={style.text2}>{state ? state.data.data.Follower : null}</h6>
                                <Link to={`/Login/HomeLogin/Profile/Pengikut`} className={style.text3}><h6 >Pengikut</h6></Link>
                                <h6 className={style.text4}>
                                    <BiIcons.BiCommentDetail size={20} className={style.space5} />
                                    10
                                </h6>
                                <Link to={``} className={style.text3}>
                                    <h6>Diskusi</h6>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container >
            <ThreadProfile />
        </div >
    )
}
