import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix) {
        return this.slice(0, prefix.length) === prefix;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

document.getElementById("loading").remove();

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);
