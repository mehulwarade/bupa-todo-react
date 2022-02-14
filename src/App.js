import React, { Component } from "react";
import { Btn } from "./components/Btn/Btn";
import { Div } from "./components/Div/Div";
// import { Input } from "./components/Input/Input";
import { List } from "./components/List/List";
import { Title } from "./components/Title/Title";

/*
Test Cases:
1. No double values.
2. Does the strike through stays the same after other task getting deleted.
3. The completed tasks should stay striked out when others are deleted.

To Fix:
1. X mark gets strike through too.
2. The ticked tasks come back again when deleted tasks before it.
3. Key is not needed.
4. 

*/

export default class App extends Component {
  constructor(props) {
    super(props);

    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.add = this.add.bind(this);

    this.state = {
      input_value: null,
    };
  }

  add = () => {
    console.log(this.textInput.current.value);

    // var inputValue = document.getElementById("input").value;
    var inputValue = this.textInput.current.value;

    if (inputValue === "") {
      alert("You must write something");
    } else {
      this.setState(() => ({
        input_value: inputValue,
      }));
    }
  };

  render() {
    return (
      <>
        <Div className="header">
          <Title text="My To Do List" />
          <input type="text" ref={this.textInput} placeholder="New Task ..." />
          <Btn onClick={this.add} className={"addBtn"} input_text={"Add"} />
        </Div>

        <List newtask={this.state.input_value} />
      </>
    );
  }
}
