import React from 'react';
import './index.css';

export const Div = (props) => {

    return (
        <div className={props.className} test-enzyme='div'>{props.children}</div>
    );

}