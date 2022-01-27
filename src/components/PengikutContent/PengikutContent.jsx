import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from "./PengikutContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Pengikut } from './Pengikut';
import { useState } from 'react';
import GetFollowed from '../../Hooks/GET/GetFollowed';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';
import GetFollowing from '../../Hooks/GET/GetFollowing';


export default function PengikutContent(props) {
    // const [Data, setPengikut] = useState(Pengikut)
    const { Followedstate, getData } = GetFollowed(props)
    const stateData = Followedstate?.data.IDFollowed
    // const stateFollowing = state?.data.IDFollowed
    const { state } = GetFollowing(props)
    // console.log("ini stateData", stateData ? stateData : null);
    // console.log("ini asdasds", Followedstate ? Followedstate : null);
    // console.log("ini state", state ? state?.data : null);

    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();
    const URL = `http://localhost:1234/user/followed`

    const handleFollow = async (index) => {
        // console.log("ini index", index);
        let isTrue = false;
        const URL2 = `http://localhost:1234/user/follow`
        // index.preventDefault()
        await Axios.post(URL2,
            {
                followed_id: index,
            }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                getData()
                // console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                // if (res) {
                //     console.log("berhasil")
                //     isTrue = true;
                // }
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

        // if (isTrue) {
        //     console.log()
        //     // dispatch(login(res))
        //     history("/Login/HomeLogin/Profile/Pengikut");
        //     swal({
        //         title: "Success",
        //         text: "Follow Berhasil",
        //         icon: "success",
        //     });
        // } else {
        //     return swal({
        //         title: "Error",
        //         text: "ERROR",
        //         icon: "error",
        //     });
        //     // e.preventDefault();
        // }

    }

    const handleDelete = (index) => {
        // const newData = Data.filter((e, i) => {
        //     if (i !== index) {
        //         return e

        //     }
        // })
        // setPengikut(newData)
        Axios.delete(URL, {
            headers: { "Authorization": `Bearer ${token}` },
            data: {
                Following_id: index,
            }
        })
            .then(res => {
                getData()
                console.log("ini get data", getData);
            })
            .catch(error => {
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
    return (
        <div>

            <Container>
                <Row className={style.space4}>
                    <h2 className={style.text}>Orang Yang Mengikuti Anda</h2>
                </Row>
                {
                    // Followedstate?.data.IDFollowed &&
                    Followedstate?.data.IDFollowed.map((item, index) => {
                        return (
                            <div key={index}>
                                <Row className={style.box} >
                                    <Col className={style.space3} sm={9}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6 className={style.space2}>{item ? item.Name : null}</h6>

                                    </Col>
                                    <Col sm={3}>
                                        <Button className={style.butFol}
                                            onClick={() => handleDelete(item.UserID)}
                                        >
                                            <h6 className={style.text2}>Hapus</h6>
                                        </Button>
                                        {
                                            state?.data.IDFollowed &&
                                                state?.data.IDFollowed.find((item2 => item2.Name == item.Name)) ?
                                                <Button
                                                    Button className={style.butFol} >
                                                    <h6 className={style.text2}>Mengikuti</h6>
                                                </Button>
                                                :

                                                <Button className={style.butFol} onClick={() => handleFollow(item.UserID)}>
                                                    <h6 className={style.text2}>Ikuti Balik</h6>
                                                </Button>
                                        }

                                    </Col>

                                </Row>
                            </div>
                        )
                    })
                }

            </Container >

        </div >
    )
}
