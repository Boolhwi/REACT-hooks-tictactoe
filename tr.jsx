import React from 'react';
import Td from './td';

const Tr = ({rowData, rowIndex, dispatch}) => {
    return(
        <tr>
            {Array(rowData.length).fill().map((td,i)=> {
            return <Td rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]}/>})}
        </tr>

    )
}

export default Tr;