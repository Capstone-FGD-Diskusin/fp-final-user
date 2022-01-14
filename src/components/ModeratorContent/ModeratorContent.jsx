import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { SearchKategori } from '../SearchContent/SearchKategori'
import style from "./ModeratorContent.module.css"

export default function ModeratorContent() {
    const { id } = useParams();

    return (
        <div className={style.space3}>
            <Container>
                <Row>
                    <div className={style.space}>
                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                            <h5 className={style.kanan}>Moderator</h5>
                        </Link>
                    </div>
                    {
                        SearchKategori.filter(item => item.Kategori == id).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={style.space2}>

                                        {/* {
                                            for (let i = 0; i < array.length; i++) {
                                                const element = array[i];
                                                
                                            }
                                        } */}
                                        <Link className={style.box2} to={`/Login/HomeLogin/Trending`}>
                                            <h6 className={style.kanan}>{item.Moderator[0]}</h6>
                                        </Link>

                                    </div>
                                </div>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}
