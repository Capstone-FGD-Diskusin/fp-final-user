import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import style from './HomeDefContent.module.css'
import gambar from "../../img/HomeDefault.png"
import gambar1 from "../../img/bag.png"
import gambar2 from "../../img/lingkaran.png"
import gambar3 from "../../img/obeng.png"

export default function HomeDefContent() {
    return (
        <div>
            <Container>
                <div>
                    <div><h1 className={style.h1}>Nama Aplikasi</h1></div>
                    <div>
                        <h6 className={style.tes}>Et has minim elitr intellegat.
                            Mea aeterno eleifend antiopam ad, nam no
                            suscipit quaerendum. <br />
                            At nam minimum ponderum.
                            Est audiam animal molestiae te.

                            <br />
                            {/* <div className={style.midB}> */}
                            <Button className={style.butin}>Daftar</Button>
                            <Button className={style.butin}>Learn More</Button>
                            {/* </div> */}
                        </h6>

                        <div>
                            <Row>
                                <Col sm={2}></Col>
                                <Col sm={8} >
                                    <div className={style.imgg}><Image src={gambar} /></div>
                                    {/* <br />
                        https://meet.google.com/ige-osdr-gcc            <h1>sadas</h1> */}
                                </Col>
                                <Col sm={2}></Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className={style.text2}>Bergabung Untuk Diskusi</h2>
                        <h6 className={style.text3}>Forum Diskusi Online</h6>
                    </div>
                    <Row>
                        <Col>
                            <div className={style.mid}>
                                <div> <Image src={gambar1} width="15%" /></div>
                                <h6 className={style.text2}> communication </h6>
                                <h6 className={style.text3}>
                                    At eripuit signiferumque sea, vel ad mucius molestie, <br />
                                    cu labitur iuvaret vulputate sed.
                                </h6>
                                <h6 className={style.text4}>Discover</h6>
                            </div>
                        </Col>
                        <Col>
                            <div className={style.mid}>
                                <div>
                                    <Image src={gambar2} width="15%" />
                                </div>
                                <h6 className={style.text2}> Insgiht </h6>
                                <h6 className={style.text3}>
                                    At eripuit signiferumque sea, vel ad mucius molestie, <br />
                                    cu labitur iuvaret vulputate sed.
                                </h6>
                                <h6 className={style.text4}>Discover</h6>
                            </div>
                        </Col>
                        <Col>
                            <div className={style.mid}>
                                <div><Image src={gambar3} width="15%" /></div>
                                <h6 className={style.text2}> kredibel </h6>
                                <h6 className={style.text3}>
                                    At eripuit signiferumque sea, vel ad mucius molestie, <br />
                                    cu labitur iuvaret vulputate sed.
                                </h6>
                                <h6 className={style.text4}>Discover</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>


        </div>
    )
}
