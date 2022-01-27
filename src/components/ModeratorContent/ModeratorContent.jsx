import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import GetAllCategory from '../../Hooks/GET/GetAllCategory'
import GetAllUser from '../../Hooks/GET/GetAllUser'
import { SearchKategori } from '../SearchContent/SearchKategori'
import style from "./ModeratorContent.module.css"

export default function ModeratorContent(props) {
    const stateKat = GetAllCategory(props)
    const { stateAlluser, getDatalluser } = GetAllUser(props)
    console.log("ini statekat", stateKat ? stateKat : null);
    console.log("ini statealluser", stateAlluser ? stateAlluser : null);
    const { id } = useParams();

    return (
        <div className={style.space3}>
            <Container>
                <Row>
                    <div className={style.space}>
                        <Link className={style.box2} to={``}>
                            <h5 className={style.kanan}>Moderator</h5>
                        </Link>
                    </div>
                    {
                        stateKat?.data.data.filter(item => item.Name == id).map((item, index) => {
                            return (
                                <div key={index}>

                                    {/* {item.ID} */}
                                    {
                                        stateAlluser?.data.data.filter(item2 => item2.Role == "moderator").map((item2, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={style.box2}>
                                                        {item2.Username}
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    {/* {
                                            for (let i = 0; i < array.length; i++) {
                                                const element = array[i];
                                                
                                            }
                                        } */}
                                    {/* <Link className={style.box2} to={``}>
                                            <h6 className={style.kanan}>{item.Moderator[0]}</h6>
                                        </Link> */}


                                </div>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}
