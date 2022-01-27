import React from 'react'
import { Button, Col, Container, Image, Row, Accordion } from 'react-bootstrap'
import style from "./ThereadLogin.module.css"
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';
import gambar from "../../img/Spiderman.png"
import gambar2 from "../../img/love.png"
import { ThreadLoginData } from './ThreadLoginData';
import { Link, useNavigate } from 'react-router-dom';
import ThreadBalas from './ThreadBalas';
import GetHomePageThread from '../../Hooks/GET/GetMengikutiThread';
import GetUserID from '../../Hooks/GET/GetUserID';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';
import GetProfileData from '../../Hooks/GET/GetProfileData';

export default function ThreadMengikutiContent(props) {
    let history = useNavigate();
    const token = useSelector((state) => state.dataUser.token)

    const state = GetHomePageThread(props)
    const stateProfileData = GetProfileData(props)
    const user = GetUserID(props)


    // console.log("ini user", user ? user.data.data : null);
    // console.log("ini", state ? state.data.threads : null);

    const handleLike = async (index) => {
        let isTrue = false;
        const URL = `http://localhost:1234/like`
        await Axios.post(URL,
            {
                headers: { "Authorization": `Bearer ${token}` },
                data: {
                    thread_id: index,
                }
            })
            .then(res => {
                // console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    // console.log("berhasil")
                    isTrue = true;
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

        if (isTrue) {
            console.log()
            // dispatch(login(res))
            history("/Login/HomeLogin");
            swal({
                title: "Success",
                text: "Register Berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "Password atau Email salah",
                icon: "error",
            });
            // e.preventDefault();
        }

    }
    return (
        <>
            <div className={style.space}>
                {state?.data.threads.map((item, index) => {
                    return (
                        <div key={index}>
                            <Container className={style.space7}>
                                <Row>
                                    <Col sm={6} className={style.posisi}>
                                        <FiIcons.FiUser size={25} />
                                        <h6 className={style.space2}>
                                            {/* {item.Name} */}

                                            {
                                                item ? item.UserName : null
                                            }
                                        </h6>
                                        <h6 className={style.space3}>
                                            <Button
                                                variant=""
                                                className={style.butIkut}
                                            // onClick={() => handleFollow(item.UserID)}
                                            >Mengikuti
                                            </Button>
                                        </h6>
                                    </Col>
                                    <Col sm={3}></Col>
                                    <Col sm={3}></Col>
                                </Row>
                                <Row className={style.box}>
                                    <div >
                                        <Col className={style.mid}>
                                            {item ? item.Title : null}
                                        </Col>
                                    </div>
                                    <div >
                                        <Col className={style.mid}>
                                            <Image src={item ? item.ImgUrl : null} width="80%" />
                                        </Col>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col sm={1}></Col>
                                            <Col sm={10}>
                                                <h6 className={style.space4}>
                                                    {item ? item.Description : null}
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
                                            {/* <div className={style.image}>
                                                <label for="like-input">
                                                    <Image src={gambar} />
                                                    <img src={gambar2} width="30px" />
                                                </label>
                                                <input
                                                    id="like-input"



                                                value={data.img}
                                                name="img"

                                                />
                                            </div> */}
                                            {/* <div className={style.love}>
                                                <FcIcons.FcLike />
                                            </div> */}

                                            <h6 className={style.space8}>
                                                {item ? item.Like : null}
                                            </h6>
                                            <Link to={`/Login/HomeLogin/${item.ID}/Comment`} className={style.space9}>
                                                <BiIcons.BiCommentDetail size={20} className={style.space10} />
                                            </Link>
                                            <h6 className={style.space8}>
                                                {/* <Link to={`/Login/HomeLogin/${item.Id}`}><ThreadBalas /></Link> */}
                                                {/* <ThreadBalas Id={index} /> */}
                                                {/* <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>1</Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion> */}
                                                {item ? item.JumlahComment : null}
                                            </h6>
                                            <FiIcons.FiShare2 className={style.space11} />

                                        </div>
                                        <Link to={``} className={style.text}>
                                            <h6 >
                                                {item ? item.CategoryName : null}
                                            </h6></Link>
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
