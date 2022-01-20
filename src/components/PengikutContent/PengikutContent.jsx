import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from "./PengikutContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Pengikut } from './Pengikut';
import { useState } from 'react';


export default function PengikutContent() {
    const [Data, setPengikut] = useState(Pengikut)
    const handleDelete = (index) => {
        const newData = Data.filter((e, i) => {
            if (i !== index) {
                return e

            }
        })
        setPengikut(newData)
    }
    return (
        <div>

            <Container>
                <Row className={style.space4}>
                    <h2 className={style.text}>Orang Yang Pengikut Anda</h2>
                </Row>
                {
                    Data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Row className={style.box} >
                                    <Col className={style.space3} sm={9}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6 className={style.space2}>{item.Name}</h6>

                                    </Col>
                                    <Col sm={3}>
                                        <Button className={style.butFol} onClick={() => handleDelete(index)}>
                                            <h6 className={style.text2}>Hapus</h6>
                                        </Button>
                                        <Button className={style.butFol}><h6 className={style.text2}>Ikuti Balik</h6></Button>
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
