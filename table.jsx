import React from 'react';
import Tr from './tr';

import './table.css'

const Table = ({tableData, dispatch}) => {
    return(
    <table>
        {Array(tableData.length).fill().map((tr, i) => {
            return <Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch}/>
        })}
    </table>
    )
}

export default Table;