"use client"
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import PaginationTableUser from './pagination.user'

function TableUser() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState([1, 2]);
    const [pageSelected, setPageSelected] = useState(1)
    const [skipLower, setSkipLower] = useState(0);
    const [skipUpper, setSkipUpper] = useState(4);

    useEffect(() => {
        try {
            let getUserData = async () => {
                let dataUser = await axios('https://api.github.com/users?per_page=' + count)
                if (dataUser.data) {
                    console.log(dataUser.data);
                    setData(dataUser.data);
                }
                let checkPages = count % 5
                if (checkPages === 0) {
                    let pages = count / 5
                    setPage(pages)
                } else {
                    let pages = Math.celi(count / 5)
                    setPage(pages)
                }
            }
            getUserData();
        } catch (error) {
            console.log(error);
        }
    }, [count])

    useEffect(() => {
        let newPageNumber = [];
        for (let i = 0; i < page; i++) {
            newPageNumber.push(i + 1);
        }
        setPageNumber(newPageNumber)
    }, [page])

    useEffect(() => {
        let lower = 0; let upper = 4
        setSkipLower(lower + 5 * (pageSelected - 1))
        setSkipUpper(upper + 5 * (pageSelected - 1))
    }, [pageSelected])


    const handleCount = (e) => {
        setCount(e.target.value);
    }

    const handleSelect = (data) => {
        if (data < 1) {
            setPageSelected(1);
        } else if (data > page) {
            setPageSelected(page);
        } else {
            setPageSelected(data)
        }
        
    }

    return (
        <>
            <select onChange={e => handleCount(e)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <PaginationTableUser handleSelect={data => handleSelect(data)} pageNumber={pageNumber} pageSelected={pageSelected} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        if (index >= skipLower && index <= skipUpper) {
                            return (
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td><Image style={{ width: '100px' }} roundedCircle src={user.avatar_url} /></td>
                                    <td>{user.login}</td>
                                    <td>{user.url}</td>
                                </tr>)
                        } else {
                            return null
                        }
                    })}
                </tbody>
            </Table>
        </>

    );
}

export default TableUser;
