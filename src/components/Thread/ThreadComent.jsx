import React, { useEffect, useState } from 'react'
import style from "./ThreadCommet.module.css"
import Axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import swal from 'sweetalert';
import * as FiIcons from 'react-icons/fi';
import GetAllUser from '../../Hooks/GET/GetAllUser';

export default function ThreadComment(props) {
    const { id } = useParams()
    // console.log(id ? id : null);
    const [dataComment, setState] = useState(null)
    const { stateAlluser, getDatalluser } = GetAllUser(props)
    // console.log("ini state", stateAlluser ? stateAlluser.data.data : null);


    const token = useSelector((state) => state.dataUser.token)
    const URL = `http://localhost:1234/thread/comment/1/balasan`
    let history = useNavigate();

    const getData = async () => {
        // const URL = `http://localhost:1234/thread/comment/` + id + `/balasan`
        Axios.get(URL)
            .then(res => {
                // console.log("ini res", res);
                setState(res)

                // setProfile(res.data.data);
                if (res.data.token) {
                    // console.log("berhasil")

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

    useEffect(() => {
        if (token) {
            getData();
            // console.log(profile)
        }
    },
        []);

    // console.log(dataComment ? dataComment?.data.data : null);
    return (
        <>
            {
                dataComment?.data.data.filter(item => item.ThreadID == id).map((item, index) => {
                    // console.log(dataComment?.data.data);
                    return (
                        <div>
                            <div >
                                {
                                    stateAlluser?.data.data.filter(item2 => item2.ID == item.UserID).map((item2, index) => {
                                        return (
                                            <div className={style.boxAtas}>
                                                <FiIcons.FiUser size={25} />
                                                <h6 className={style.text}>{item2.Username}</h6>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={style.box}>
                                {item.Comment}
                            </div>

                            {/* {console.log("berhasil", item.Comment)} */}
                        </div>
                    )
                })
            }
        </>
    )
}
