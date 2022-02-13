import React, { Component } from "react";
import { Btn } from "./components/Btn/Btn";
import { Div } from "./components/Div/Div";
import { Input } from "./components/Input/Input";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value: null
    };
  }

  add = () => {
    var inputValue = document.getElementById("input").value;

    if (inputValue === "") {
      alert("You must write something");
    } else {
      this.setState(()=>({
        input_value: inputValue
      }))
    }
  };

  render() {
    return (
      <>
        <Div className="header">
          <Title text="My To Do List" />
          <Input text="New Task ..." />
          <Btn onClick={this.add} className={'addBtn'} input_text={'Add'} />
        </Div>

        <List newtask={this.state.input_value} />

      </>
    );
  }
}

export default App;
