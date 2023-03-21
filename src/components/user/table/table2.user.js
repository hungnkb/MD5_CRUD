import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateModalUser from '../actions/create.user';


function Table2() {
    const [data, setData] = useState([]);
     
    const handleFormData = (data) => {
        console.log(data);
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
                    {data.map(user => {
                        return (
                            <>
                                <tr>
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

                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
            
        </>

    );
}

export default Table2;