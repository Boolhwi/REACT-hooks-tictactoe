import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Tictactoe from './tictactoe';


const Hot = hot(Tictactoe)

ReactDOM.render(<Hot/>, document.querySelector("#root"))