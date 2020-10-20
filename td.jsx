import React, { useContext } from 'react';
import {CLICK_CELL} from './tictactoe';
import {TableContext} from './tictactoe';

import './td.css';

const Td = ({ rowIndex, cellIndex, cellData}) => {

    const {dispatch} = useContext(TableContext)

    const onClickTd = () => {
        if(cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell:cellIndex})
    }

    return(
        <td onClick={onClickTd}>{cellData}</td>
    )
}

export default Td;