// https://betterprogramming.pub/how-to-achieve-100-test-coverage-for-react-functional-components-fbde1e40631c

import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import App from "../App";
import { render, screen, mount } from '@testing-library/react';
import $ from "jquery";

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());


//test('renders learn react link', () => {
//    render(<App />);
//    const linkElement = screen.getByText(/My To Do List/i);
//   expect(linkElement).toBeInTheDocument();
//});

describe('App component', () => {

  it('contains the title', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.debug());
    
    //console.log(wrapper.find('Title').dive().debug());

    //console.log(wrapper.find('Title').dive().text());

    const title = wrapper.find('Title').dive().text();

    expect(title).toContain("My To Do Lis");
    expect(title).toEqual("My To Do List");
  });

})

describe('Click button works ?', () => {
  it('clicks on buttton', () => {
    const wrapper = shallow(<App />);
    const inputBox = wrapper.find('input')
    const addButton = wrapper.find('Btn').dive().find('button.addBtn');
    //console.log(wrapper.find('Btn').dive().find('button.addBtn').debug());

    //wrapper.Simulate.change(inputBox, {target: {value: 'test'}});

    //enzyme structure
    //wrapper.find('input').simulate('change', {target: {value : 'hell'}});

    //jest structure
    console.log(wrapper.find('input').props.value)

    //addButton.simulate('click');
    //console.log(wrapper.find('input').debug());
    console.log(wrapper.find('input').text());

  })
})