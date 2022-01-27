import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GetAllThread from '../../Hooks/GET/GetAllThread'
import style from "./TrendingContent.module.css"

export default function TrendingContent(props) {
    const state = GetAllThread(props)
    console.log("ini state", state ? state : null);
    return (
        <div className={style.space3}>
            <Container>
                <Row>
                    <div className={style.space}>
                        <Link className={style.box2} to={``}>
                            <h5 className={style.kanan}>Trending Diskusi</h5>
                        </Link>
                    </div>
                    {
                        state?.data.data.map((item, index) => {
                            return (
                                <div>
                                    {
                                        state?.data.data.find(item => item.Like > 0) ?
                                            <div>
                                                <div className={style.space2}>
                                                    <Link className={style.box2} to={`/Login/HomeLogin/${index}/Comment`}>
                                                        <h6 className={style.kanan}>
                                                            {item ? item.Title : null}
                                                            {/* {
                                                                item?.Like.sort((a, b) => a - b)
                                                            } */}
                                                        </h6>
                                                    </Link>

                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            )
                        })
                        // state?.data.dta.map([...map].sort((a, b) => (a[1].localeCompare(b[1]))))
                    }


                    {/* <div className={style.space2}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h6 className={style.kanan}>Trending 1</h6>
                        </Link>
                    </div>
                    <div className={style.space2}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h6 className={style.kanan}>Trending 2</h6>
                        </Link>

                    </div>
                    <div className={style.space2}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h6 className={style.kanan}>Trending 3</h6>
                        </Link>
                    </div>
                    <div className={style.space2}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h6 className={style.kanan}>Trending 4</h6>
                        </Link>
                    </div> */}
                </Row>
            </Container>
        </div >
    )
}
