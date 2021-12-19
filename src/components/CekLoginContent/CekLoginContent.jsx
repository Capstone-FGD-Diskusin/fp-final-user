import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import style from './CekLoginContent.module.css'

export default function CekLoginContent() {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div><h4 className={style.text1}>LOGO</h4></div>

                        <div>
                            <h4 className={style.text2}>Kode Telah Terkirim Ke Email</h4>
                            <h5 className={style.text3}>user@mail.com</h5>
                            <div className="d-grid gap-2">
                                <Form.Control type="text" placeholder="Kata Sandi   " />
                                <Button className={style.butGo} size="lg">
                                    Lanjutkan
                                </Button>
                                <h6>Belum mendapatkan? <Button className={style.butKirim}>Kirim lagi </Button></h6>
                            </div>
                        </div>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
