import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from "./MengikutiContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

export default function MengikutiContent() {
    return (
        <div>
            <Container>
                <Row>
                    <h2 className={style.text}>Orang Yang Di Ikuti</h2>
                </Row>
                <Row>
                    <Col className={style.box}>
                        <FiIcons.FiUser size={20} className={style.space} />
                        <h6 className={style.space2}>Username</h6>
                        <Button
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
