import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form2 from 'react-bootstrap/Form';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";


function CreateModalUser(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
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
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        role: 'user',
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={values => {
                        props.handleFormData(values);
                        Formik.resetForm({
                            username: '',
                            email: '',
                            role: 'user',
                        })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Modal.Body>
                                <div className="form-group">
                                    <label htmlFor="email">Username</label>
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        className={`form-control ${touched.username && errors.username ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="username"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        
                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <label className="form-label">Role</label>
                                <Field
                                    as="select"
                                    id="role"
                                    className="form-select mb-3" >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </Field>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type="submit" variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>

                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
}

export default CreateModalUser;