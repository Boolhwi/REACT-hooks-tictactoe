import React from 'react';
import Tr from './tr';

const Table = ({onClick}) => {
    return(
    <table onClick={onClick}>
        <Tr/>
    </table>
    )
}

export default Table;