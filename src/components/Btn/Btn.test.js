/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow} from 'enzyme';

import {Btn} from './Btn'

import { findByCustomTag } from './../../../utils/index'

const setup = (props={}) => {
    const component = shallow(<Btn {...props} />);
    return component;
}

describe('Render Button', () => {

    let wrapper;
    beforeEach (() => {
        const props = {
            onClick:null,
            className:'addBtn',
            input_text:'Add'
        }

        wrapper = setup(props);
    });

    it('should contain 1 button', () => {
        //console.log(wrapper.debug());
        const button = findByCustomTag(wrapper, 'addButton');
        expect(button.length).toBe(1); // Pass
    })

})

