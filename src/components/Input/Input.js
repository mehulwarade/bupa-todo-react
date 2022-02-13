import React from 'react';
import './index.css';

export const Input = ({text}) => {

    return (
        <input type="text" id="input" placeholder={text}></input>
    );

}