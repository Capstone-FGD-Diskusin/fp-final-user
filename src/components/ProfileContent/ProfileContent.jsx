import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import style from "./ProfileContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';
import gambar from "../../img/bintang.png"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ThreadLoginData } from '../Thread/ThreadLoginData';
import ThereadLogin from '../Thread/ThereadLogin';
import ThereadProfile from './ThreadProfile';
import ThreadProfile from './ThreadProfile';
import GetProfileData from '../../Hooks/GET/GetProfileData';
import GetHomePageThread from '../../Hooks/GET/GetMengikutiThread';
import GetFollowing from '../../Hooks/GET/GetFollowing';
import GetFollowed from '../../Hooks/GET/GetFollowed';
import swal from 'sweetalert';
import Axios from 'axios';

export default function ProfileContent(props) {
    const { state } = GetFollowing(props)
    const state2 = GetFollowed(props)
    const { id } = useParams();
    const stateData = GetProfileData(props)
    const i = 1

    // console.log("ini state", state2 ? state2 : null);

    const [stateProfile, setStateProfile] = useState(null)

    console.log("ini stateprofile", stateProfile ? stateProfile : null);
    const URL = `http://localhost:1234/user/` + id + ``
    let history = useNavigate();

    useEffect(() => {
        const getData = async () => {
            Axios.get(URL)
                .then(res => {
                    // console.log(res);
                    setStateProfile(res)

                    // setProfile(res.data.data);
                    if (res.data.token) {
                        console.log("berhasil")

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
                        if (error.response.status === 401) {
                            history("/Login");
                            swal({
                                title: "Error",
                                text: "Mohon Login Terlebih Dahulu",
                                icon: "error",
                            });
                        }
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
        }
        getData();
        // console.log(profile)

    },
        []);

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
                                <FcIcons.FcLike size={25} />
                                <h6 className={style.text}>
                                    {
                                        stateProfile ? stateProfile.data.data.SumLike : null
                                    }
                                </h6>
                                <h6 className={style.text2}>
                                </h6>

                                <Link to={`/Login/HomeLogin/Profile/Mengikuti`} className={style.text3}>
                                    <div className={style.posisi}>
                                        <h6 className={style.text5}>
                                            {
                                                stateProfile ? stateProfile.data.data.Following : null
                                            }
                                        </h6>
                                        <h6>
                                            Mengikuti
                                        </h6>
                                    </div>
                                </Link>

                                <h6 className={style.text2}>
                                </h6>
                                <Link to={`/Login/HomeLogin/Profile/Pengikut`} className={style.text3}>
                                    <div className={style.posisi}>
                                        <h6 className={style.text5}>
                                            {
                                                stateProfile ? stateProfile.data.data.Following : null
                                            }
                                        </h6>
                                        <h6>
                                            Mengikuti
                                        </h6>
                                    </div>
                                </Link>
                                <h6 className={style.text4}>
                                    <BiIcons.BiCommentDetail size={20} className={style.space5} />
                                </h6>
                                <Link to={`/Login/HomeLogin/Profile/${id}`} className={style.text3}>
                                    <div className={style.posisi}>
                                        <h6 className={style.text5}>
                                            {
                                                stateProfile ? stateProfile.data.data.SumThread : null
                                            }
                                        </h6>
                                        <h6>
                                            Diskusi
                                        </h6>
                                    </div>
                                </Link>
                                <Link to={`/Login/HomeLogin/Profile/${id}/Favorite/`} className={style.text3}>
                                    <div className={style.posisi}>
                                        <h6 className={style.text5}>
                                            {/* {
                                                stateProfile ? stateProfile.data.data.SumThread : null
                                            } */}
                                            <FiIcons.FiStar />
                                        </h6>
                                        <h6>
                                            Favorite
                                        </h6>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                        <Link to={`/Login/HomeLogin/Profile/${id}/Edit`} className={style.linkEdit}>
                            <Button size="lg" className={style.editProf}>
                                <h6>Lihat Profile</h6>
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container >
            {/* <ThreadProfile /> */}
        </div >
    )
}
