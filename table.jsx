import React, {useContext} from 'react';
import Tr from './tr';
import {TableContext} from './tictactoe';

import './table.css'

const Table = () => {

    const {tableData} = useContext(TableContext)

    return(
    <table>
        {Array(tableData.length).fill().map((tr, i) => {
            return <Tr rowIndex={i} rowData={tableData[i]}/>
        })}
    </table>
    )
}

export default Table;