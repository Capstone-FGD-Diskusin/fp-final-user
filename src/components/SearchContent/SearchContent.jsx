import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SearchKategori } from './SearchKategori'
import style from './SearchContent.module.css'

export default function SearchContent() {
    return (
        <div className={style.space3}>
            <div className={style.space}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Search" className={style.input} />
                    </Col>
                </Form.Group>
            </div>
            <Container>
                <div>
                    <div >
                        <Row>
                            <Col className={style.box}><h5>Kategori</h5></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        {
                            SearchKategori.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link className={style.box2} to={`/Login/HomeLogin/${item.Kategori}`}><h6 className={style.text}>{item.Kategori}</h6></Link>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </Container >
        </div >
    )
}
