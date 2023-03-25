import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateModalUser from '../actions/create.user';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


function Table2() {
    const [data, setData] = useState([]);

    const handleFormData = async (newUser) => {
        let responseData = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/users',
            data: {
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            },
        })
        console.log(responseData);
        // setData([...data, newUser])
    }

    // const handleEditUser = (editUser) => {
    //     console.log(editUser);
    // }

    const handleDeleteUser = (e) => {
        let newData = data.filter(user => {
            return user.username !== e.target.value;
        })
        setData(newData);
    }

    useEffect(() => {
        let getData = async () => {
            let dataUser = await axios({
                method: 'GET',
                url: 'http://localhost:3001/api/users',
            })
            if (dataUser.data) {
                setData(dataUser.data);
            }
        }
        setTimeout(() => { getData() }, 3000)

    }, [])

    return (
        <>
            <CreateModalUser handleFormData={handleFormData} />
            <Table ble striped bordered hover>
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
                    {data.length > 0 ? (
                        data.map((user, index) => {
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
                        })
                    ) : (<Spinner className='m-3' animation="border" variant="primary" />)}
                </tbody>
            </Table>

        </>

    );
}

export default Table2;