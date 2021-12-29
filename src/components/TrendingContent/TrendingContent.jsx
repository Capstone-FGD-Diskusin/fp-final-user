import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from "./TrendingContent.module.css"

export default function TrendingContent() {
    return (
        <div className={style.space3}>
            <Container>
                <Row>
                    <div className={style.space}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h5 className={style.kanan}>Trending Diskusi</h5>
                        </Link>
                    </div>
                    <div className={style.space2}>
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
                    </div>
                </Row>
            </Container>
        </div>
    )
}
