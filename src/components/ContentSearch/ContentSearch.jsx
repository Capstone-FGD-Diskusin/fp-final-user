import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './ContentSearch.module.css'

export default function ContentSearch() {
    return (
        <div >
            <div className={style.space}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Search" />
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
                        <div className={style.space2}>
                            <Link className={style.box2} to={`/Login/HomeLogin/Hiburan`}><h6 className={style.text}>Hiburan</h6></Link>
                        </div>
                        <div >
                            <Link className={style.box2} to={`/Login/HomeLogin/Politik`}><h6 className={style.text}>Politik</h6></Link>
                        </div>
                        <div >
                            <Link className={style.box2} to={`/Login/HomeLogin/GayaHidup`}><h6 className={style.text}>Gaya Hidup</h6></Link>
                        </div>
                        <div >
                            <Link className={style.box2} to={`/Login/HomeLogin/KesehatanMental`}><h6 className={style.text}>KesehatanMental</h6></Link>
                        </div>
                        <div >
                            <Link className={style.box2} to={`/Login/HomeLogin/Olahraga`}><h6 className={style.text}>Olahraga</h6></Link>
                        </div>
                        <div >
                            <Link className={style.box2} to={`/Login/HomeLogin/Game`}><h6 className={style.text}>Game</h6></Link>
                        </div>

                    </div>
                </div>
            </Container >
        </div >
    )
}
