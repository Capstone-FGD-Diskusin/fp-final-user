import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap'
import style from './LoginContent.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function LoginContent() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
    return (
        <div>
            <Container className={style.space}>
                <Row>
                    <Col sm={7}>
                        asdas
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={4}>
                        <h3 className={style.text1}>Logo</h3>
                        <h4 className={style.text2}>Masuk</h4>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                            <Button type="submit" className={style.Butsub}>Daftar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
