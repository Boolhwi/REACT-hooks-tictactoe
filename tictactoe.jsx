import React, {useCallback, useReducer, useState} from 'react';
import Table from './table';

const initialState = {
    winner:'',
    turn: '0',
    tableData: [['','',''],['','',''],['','','']]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WINNER':
            console.log(state.winner)
            console.log(action.winner)
            return {
                ...state,
                winner: action.winner
            }
    }
}

const TicTacToe = () => {

    const [state, dispatch] =useReducer(reducer, initialState)

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

    const onClickTable = useCallback(() => {
        dispatch({type: 'SET_WINNER', winner: 'O'})
    }, [])

    return(
        <>
        <Table onClick={onClickTable}/>
        {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe;