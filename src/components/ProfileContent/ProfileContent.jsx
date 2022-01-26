import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import style from "./ProfileContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import gambar from "../../img/bintang.png"
import { Link, useParams } from 'react-router-dom';
import { ThreadLoginData } from '../Thread/ThreadLoginData';
import ThereadLogin from '../Thread/ThereadLogin';
import ThereadProfile from './ThreadProfile';
import ThreadProfile from './ThreadProfile';
import GetProfileData from '../../Hooks/GET/GetProfileData';
import GetHomePageThread from '../../Hooks/GET/GetMengikutiThread';
import GetFollowing from '../../Hooks/GET/GetFollowing';
import GetFollowed from '../../Hooks/GET/GetFollowed';

export default function ProfileContent(props) {
    const { state } = GetFollowing(props)
    const state2 = GetFollowed(props)
    const { id } = useParams();
    const stateData = GetProfileData(props)
    const i = 1

    console.log("ini state", state2 ? state2 : null);

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
                                {/* {console.log(stateData ? stateData.data.data.Username : null)} */}
                                {
                                    stateData ? stateData.data.data.Username : null
                                }
                            </h1></Col>
                        </Row>

                        <Row>
                            <Col className={style.bag}>
                                <Image src={gambar} width="25px" height="25px" className={style.img} />
                                <h6 className={style.text}>
                                    10
                                </h6>

                                <h6 className={style.text2}>
                                    {
                                        state?.data.IDFollowed.map((item, index) => {
                                            if (index == 0) {
                                                for (let i = 1; i <= index; i++) {
                                                    // const element = array[index];
                                                    return (
                                                        <div key={index}>
                                                            {i}

                                                        </div>
                                                    )
                                                    // for (let index = 0; index < i; index++) {

                                                    //     return (
                                                    //         <>
                                                    //             test</>
                                                    //     )
                                                    // }
                                                }

                                            } else if (index == null) {
                                                return (
                                                    <div key={index}>
                                                        0
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </h6>
                                <Link to={`/Login/HomeLogin/Profile/Mengikuti`} className={style.text3}>
                                    <h6>Mengikuti</h6>
                                </Link>

                                <h6 className={style.text2}>
                                    {

                                        state2?.state?.data.IDFollowed.map((item, index) => {
                                            if (index == 0) {
                                                for (let i = 1; i <= index; i++) {
                                                    // const element = array[index];
                                                    return (
                                                        <div key={index}>
                                                            {i}
                                                        </div>
                                                    )
                                                    // for (let index = 0; index < i; index++) {

                                                    //     return (
                                                    //         <>
                                                    //             test</>
                                                    //     )
                                                    // }
                                                }

                                            } else if (index == null) {
                                                return (
                                                    <div key={index}>
                                                        0
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </h6>
                                <Link to={`/Login/HomeLogin/Profile/Pengikut`} className={style.text3}>
                                    <h6 >Pengikut</h6>
                                </Link>
                                <h6 className={style.text4}>
                                    <BiIcons.BiCommentDetail size={20} className={style.space5} />
                                    10
                                </h6>
                                <Link to={``} className={style.text3}>
                                    <h6>Diskusi</h6>
                                </Link>
                            </Col>
                        </Row>
                        <Button size="lg" className={style.editProf}>
                            <Link to={`/Login/HomeLogin/Profile/${id}/Edit`} className={style.linkEdit}>
                                <h6>Lihat Profile</h6>
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container >
            <ThreadProfile />
        </div >
    )
}
