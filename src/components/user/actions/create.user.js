import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';

function CreateModalUser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            role: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    const [userData, setUserData] = useState({});

    let handleDataForm = (e) => {
        setImmediate(e)
    }

    let inputData = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Button variant="primary" onClick={handleShow}>
                    Create
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Username</Form.Label>
                        <Form.Control id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.username} />
                        <Form.Label className="mt-2">Email</Form.Label>
                        <Form.Control onChange={e => { inputData(e) }} type="text" placeholder="email" />
                        <Form.Label className="mt-2">Role</Form.Label>
                        <Form.Select onChange={e => { inputData(e) }} aria-label="Default select example">
                            <option value="user">User</option>
                            <option value="amin">Admin</option>
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>

        </>
    );
}

export default CreateModalUser;