import React from 'react';
import './index.css';

export const Input = (props) => {

    return (
        <input type="text" id="input" placeholder={props.text}></input>
    );

}