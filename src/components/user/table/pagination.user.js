import Pagination from 'react-bootstrap/Pagination';
import React, { useState, useEffect } from 'react'

function PaginationTableUser(props) {
    console.log(props.pageSelected);
    return (
        <Pagination>
            <Pagination.First key='first' onClick={() => props.handleSelect(props.pageNumber[0])}></Pagination.First>
            <Pagination.Prev key='prev' onClick={() => props.handleSelect(props.pageSelected - 1)} />
            {props.pageNumber.map((pageNumber, index) => {
                if (pageNumber > 3) {
                    if (index % 3 === 0) {
                        return (
                            <>
                                <Pagination.Ellipsis />
                                <Pagination.Item key={index} onClick={() => props.handleSelect(pageNumber)} >{props.pageNumber[index]}</Pagination.Item>
                            </>
                        )
                    } else {
                        return (
                            null
                        )
                    }

                } else {
                    return (
                        <Pagination.Item key={index} onClick={() => props.handleSelect(pageNumber)} >{props.pageNumber[index]}</Pagination.Item>
                    )
                }

            })}


            <Pagination.Next key='next' onClick={() => props.handleSelect(props.pageSelected + 1)} />
            <Pagination.Last key='last' onClick={() => props.handleSelect(props.pageNumber[props.pageNumber.length - 1])} ></Pagination.Last>
        </Pagination>
    );
}

export default PaginationTableUser;