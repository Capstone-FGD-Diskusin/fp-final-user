import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button, Image } from 'react-bootstrap'
import style from './Register.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import gambar1 from "../../img/Register.jpg"
import gambar4 from "../../img/logoDiskusiin.png"

export default function Regis() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div>
            <Container className={style.space}>
                <Row>
                    <Col sm={7} className={style.space1}>
                        <Image src={gambar1} width="95%" />
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={4}>
                        <h3 className={style.text1}><Image src={gambar4} width="25%" /></h3>
                        <h4 className={style.text2}>Register</h4>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom06">
                                    <Form.Control type="file" placeholder="Zip" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please input Photo Profile.
                                    </Form.Control.Feedback>
                                </Form.Group> <br />
                            </Row>

                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Username is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row >

                            <Row className="mb-3">
                                <Form.Group controlId="validationCustomUsername">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Email is Required
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom03">
                                    <Form.Control type="text" placeholder="Address" required />
                                    <Form.Control.Feedback type="invalid">
                                        Address is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="validationCustom04">
                                    <Form.Control type="number" placeholder="Phone" required />
                                    <Form.Control.Feedback type="invalid">
                                        Phone Number is Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button className={style.ButDaf} size="lg" type="submit">
                                    DAFTAR
                                </Button>
                            </div>
                            <div className={style.space2}><h6>Sudah Punya Akun? <Link to={`/Login`} className={style.text3}>Login Disini</Link></h6></div>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}
