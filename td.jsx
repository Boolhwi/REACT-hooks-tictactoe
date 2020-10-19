import React, {useCallback} from 'react';
import {CLICK_CELL, SET_TURN} from './tictactoe';

import './td.css';

const Td = ({ rowIndex, cellIndex, dispatch, cellData}) => {

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