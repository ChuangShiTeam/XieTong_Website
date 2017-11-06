import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

document.getElementById("loading").remove();

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);
