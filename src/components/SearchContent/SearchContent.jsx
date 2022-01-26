import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SearchKategori } from './SearchKategori'
import style from './SearchContent.module.css'
import GetAllCategory from '../../Hooks/GET/GetAllCategory'

export default function SearchContent(props) {
    const stateCategory = GetAllCategory(props)
    // console.log("ini kategori", stateCategory ? stateCategory : null);

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
                            stateCategory?.data.data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link className={style.box2} to={`/Login/HomeLogin/${item.Name}`}>
                                            <h6 className={style.text}>{item.Name}</h6>
                                        </Link>
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
