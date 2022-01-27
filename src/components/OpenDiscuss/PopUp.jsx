import React from "react";
import { ModalBody, ModalFooter, Modal, Button, Image, } from "react-bootstrap";
import { useState } from "react";
import gambar from "../../img/text.png"
import style from "./OpenDisucuss.module.css"
import gambar2 from "../../img/unduh.png"

export default function MyVerticallyCenteredModal(data) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpload = (data) => {
        setShow(true)
        // console.log({ data });
        console.log("ini di dalem pop up", data);

    }

    // const handleUpload = () => {
    //     //file.current.files
    //     console.log(file.current.files);
    //     const formData = new FormData();
    //     Object.values(file.current.files).forEach((item) => {
    //         formData.append('file', item);
    //     });
    //     fetch(
    //         `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/upload`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 Authorization: 'Bearer token...',
    //             },
    //             body: formData,
    //         }
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((result) => {
    //             console.log(result.name);
    //             return result.fullName;
    //         })
    //         .catch((error) => {
    //             return 'gagal';
    //         });
    // };

    return (
        <>
            <Button className={style.text2} onClick={() => handleUpload(data)}>
                <h6 className={style.posisi}>
                    <Image src={gambar2} width="15px" height="15px" className={style.unduh} />
                    Upload
                </h6>
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* {
                    data.map((item, index) => {
                        return (
                            <div key={index}>

                            </div>
                        )
                    })
                } */}
                <Modal.Header closeButton>
                    <Modal.Title>Diskusi</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

