import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function CreateModalUser(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            role: 'user',
        },
        onSubmit: values => {
            props.handleFormData(values)
            formik.resetForm();
        },
    });

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create</Modal.Title>
                </Modal.Header>
                {({ errors, touched }) => (
                    <form onSubmit={formik.handleSubmit}>
                        <Modal.Body>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                id="username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.username} />
                            <div>
                                {formik.errors.username && formik.touched.username ? (
                                    <p>{formik.errors.username}</p>
                                ) : null}
                            </div>

                            <Form.Label className="mt-2">Email</Form.Label>
                            <Form.Control
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                            <Form.Label className="mt-2">Role</Form.Label>
                            <Form.Select
                                id="role"
                                name="role"
                                onChange={formik.handleChange}
                                value={formik.values.role}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Select>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>

                        </Modal.Footer>
                    </form>
                )}
            </Modal>


        </>
    );
}

export default CreateModalUser;