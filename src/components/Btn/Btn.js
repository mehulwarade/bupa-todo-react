import React from 'react';
import './index.css';

export const Btn = (props) => {

    return (
        <button onClick={props.onClick} className={props.className}>{props.input_text}</button>
    );

}