import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(data) {
    return (
        <Modal
            {...data}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    {data ? data : null}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={data.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Edit() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            {/* <button onClick={() => setModalShow(true)}>
                edit
            </button> */}
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Edit
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}