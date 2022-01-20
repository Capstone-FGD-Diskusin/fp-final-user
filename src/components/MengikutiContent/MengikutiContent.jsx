import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from "./MengikutiContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Mengikuti } from './Mengikuti';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import GetFollowing from '../../Hooks/GET/GetFollowing';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';


export default function MengikutiContent(props) {
    const { state, getData } = GetFollowing(props)
    const files = state?.data.IDFollowed


    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();
    const URL = `http://localhost:1234/user/follow`

    const handleDelete = (index) => {
        // const newData = Data.filter((e, i) => {
        //     if (i !== index) {
        //         return e

        //     }
        // })
        // setMengikuti(newData)
        // console.log("ini newData", newData);


        Axios.delete(URL, {
            headers: { "Authorization": `Bearer ${token}` },
            data: {
                Followed_id: index,
            }
        })
            .then(res => {
                getData()
                console.log("ini get data", getData);
                // console.log(res);
                // if (res.data.token) {


                // }

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
                    <h2 className={style.text}>Orang Yang Anda Ikuti</h2>
                </Row>
                {
                    state?.data.IDFollowed.map((item, index) => {
                        return (
                            <div key={index}>
                                <Row className={style.box} >
                                    <Col className={style.space3} sm={9}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6 className={style.space2}>{item ? item.UserID : null}</h6>
                                    </Col>
                                    <Col sm={3}>
                                        <Button className={style.butFol} onClick={() => handleDelete(item.UserID)} >
                                            <h6 className={style.text2}>Mengikuti</h6>
                                        </Button>
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
