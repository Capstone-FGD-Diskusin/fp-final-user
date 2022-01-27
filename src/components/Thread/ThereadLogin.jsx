import React from 'react'
import { Button, Col, Container, Image, Row, Accordion } from 'react-bootstrap'
import style from "./ThereadLogin.module.css"
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io5';
import gambar from "../../img/Spiderman.png"
import gambar2 from "../../img/love.png"
import { ThreadLoginData } from './ThreadLoginData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ThreadBalas from './ThreadBalas';
import GetUserID from '../../Hooks/GET/GetUserID';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';
import GetProfileData from '../../Hooks/GET/GetProfileData';
import GetAllThread from '../../Hooks/GET/GetAllThread';
import GetFollowing from '../../Hooks/GET/GetFollowing';
import { useState } from 'react';
import ThreadComment from './ThreadComent';
import { useEffect } from 'react';

export default function ThereadLogin(props) {
    let history = useNavigate();
    const token = useSelector((state) => state.dataUser.token)

    const state2 = GetAllThread(props)
    // console.log("ini", state ? state.data.data : null);
    const { state, getData } = GetFollowing(props)
    // console.log("ini state", state ? state.data.IDFollowed : null);

    const handleUnlike = async (index) => {
        let isTrue = false;
        console.log("ini index", index);
        const URL = `http://34.101.171.217:1234/like`
        await Axios.delete(URL, {
            headers: { "Authorization": `Bearer ${token}` },
            data:
            {
                thread_id: index,
            }

        })
            .then(res => {
                console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    console.log("berhasil")
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
            // swal({
            //     title: "Success",
            //     text: "Register Berhasil",
            //     icon: "success",
            // });
            // } else {
            //     return swal({
            //         title: "Error",
            //         text: "Password atau Email salah",
            //         icon: "error",
            //     });

        }

    }

    const handleSave = async (index) => {
        let isTrue = false;
        console.log("ini index", index);
        const URL = `http://34.101.171.217:1234/like`
        await Axios.post(URL, {
            thread_id: index,
        }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    console.log("berhasil")
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
            // swal({
            //     title: "Success",
            //     text: "Register Berhasil",
            //     icon: "success",
            // });
            // } else {
            //     return swal({
            //         title: "Error",
            //         text: "Password atau Email salah",
            //         icon: "error",
            //     });

        }

    }

    const handleLike = async (index) => {
        let isTrue = false;
        console.log("ini index", index);
        const URL = `http://34.101.171.217:1234/like`
        await Axios.post(URL, {
            thread_id: index,
        }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    console.log("berhasil")
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
            // swal({
            //     title: "Success",
            //     text: "Register Berhasil",
            //     icon: "success",
            // });
            // } else {
            //     return swal({
            //         title: "Error",
            //         text: "Password atau Email salah",
            //         icon: "error",
            //     });

        }

    }

    const handleFollow = async (index) => {
        console.log("ini index", index);
        let isTrue = false;
        const URL = `http://34.101.171.217:1234/user/follow`
        // index.preventDefault()
        await Axios.post(URL,
            {

                followed_id: index,
            }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                getData()
                console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    console.log("berhasil")
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
                text: "Follow Berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "ERROR",
                icon: "error",
            });
            // e.preventDefault();
        }

    }

    const [show, setShow] = useState(false);
    const { id } = useParams()
    const handleClose = () => setShow(false);
    // const HandleShow = () => {
    //     state2?.data.data.filter(item => item.ID == id) ? setShow(true) : setShow(false)

    // };

    const HandleShow = (e) => {
        setShow(e)
    }



    const [dataComment, setState] = useState(null)



    return (
        <>
            <div className={style.space}>
                {state2?.data.data.map((item, index) => {
                    // console.log("ini item", item);
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

                                        {
                                            state?.data.IDFollowed &&
                                                state?.data.IDFollowed.find(item2 => item2.Name == item.UserName) ?
                                                <div>
                                                    <h6 className={style.space3}>
                                                        <Button
                                                            variant=""
                                                            className={style.butIkut}
                                                        // onClick={() => handleFollow(item.UserID)}
                                                        >Mengikuti
                                                        </Button>
                                                    </h6>
                                                </div> :
                                                <div>
                                                    <h6 className={style.space3}>
                                                        <Button
                                                            variant=""
                                                            className={style.butIkut2}
                                                            onClick={() => handleFollow(item.UserID)}
                                                        >Ikuti
                                                        </Button>
                                                    </h6>
                                                </div>
                                        }

                                    </Col>
                                    <Col sm={4}></Col>
                                    <Col sm={2}>
                                        <button className={style.Savebut} onClick={() => handleSave(item.UserID)}>
                                            <h6 className={style.textSave}>save</h6>
                                        </button>
                                    </Col>
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

                                            {/* <Image src={gambar2} width="20px" height="20px" /> */}
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
                                            <div >
                                                <button className={style.loveBut2} onClick={() => handleUnlike(item.ID)}>
                                                    <IoIcons.IoHeartOutline size={20} />
                                                </button>
                                                <button className={style.loveBut} onClick={() => handleLike(item.ID)} >
                                                    <FcIcons.FcLike size={20} className={style.love} />
                                                </button>

                                            </div>

                                            <h6 className={style.space8}>
                                                {item ? item.Like : null}
                                            </h6>

                                            <Link to={`/Login/HomeLogin/${index}/Comment`} className={style.space9}>
                                                <BiIcons.BiCommentDetail size={20} className={style.space10} />
                                            </Link>
                                            <h6 className={style.space8}>

                                                <Link to={`/Login/HomeLogin/Comment/${item.ID}`}>
                                                    <button onClick={() => HandleShow(item.ID)} className={style.CommentBut}>
                                                        {item ? item.JumlahComment : null}
                                                    </button>
                                                </Link>


                                            </h6>

                                            <FiIcons.FiShare2 className={style.space11} />

                                        </div>
                                        <Link to={`/Login/HomeLogin/${item.CategoryName}`} className={style.text}>
                                            <h6 >
                                                {item ? item.CategoryName : null}
                                            </h6>
                                        </Link>

                                    </Col>
                                </Row>

                                {
                                    show == item.ID ?
                                        <div >
                                            <ThreadComment />
                                            {/* {getData()} */}
                                            {/* ben{item.ID} */}
                                        </div>

                                        : null
                                    //     state2?.data.data.filter(item => item.ID == id)map((item, index)=>{
                                    //     return()
                                    // })
                                    // state2?.data.data.filter(item => item.ID == id).map((item, index) => {
                                    //         return (

                                    //     )
                                    //     })

                                }
                            </Container>
                            {/* {console.log(state2?.data.data.find(item => item.ID == id))} */}
                            {/* <Container show={show} onHide={handleClose}>
                                <div>1234567890</div>
                            </Container> */}

                        </div>
                    )
                })}


            </div>
        </>
    )
}

// function test() {
//     return (
//         <div>
//             asdsa
//         </div>
//     )
// }