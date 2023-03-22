import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateModalUser from '../actions/create.user';


function Table2() {
    const [data, setData] = useState([]);

    const handleFormData = (newUser) => {
        setData([...data, newUser])
    } 

    const handleEditUser = (editUser) => {
        console.log(editUser);
    }

    const handleDeleteUser = (e) => {
        let newData = data.filter(user => {
           return user.username != e.target.value;
        })
        setData(newData);
    }

    return (
        <>
            <CreateModalUser handleFormData={handleFormData} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return (
                            
                                <tr key={index - 1}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.role}
                                    </td>
                                    <td>
                                        <Button
                                            style={{ color: 'white', marginRight: '5px' }}
                                            variant="info"
                                        >Edit</Button>
                                        <Button
                                            value={user.username}
                                            variant="danger"
                                            onClick={(e) => { handleDeleteUser(e) }}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            
                        )
                    })}
                </tbody>
            </Table>

        </>

    );
}

export default Table2;