import React from "react";
import "./index.css";

import { Btn } from "../Btn/Btn";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);

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

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    console.log(this.textInput.current.value);
  }
  render() {
    return (
      <>
        {/* <input type="text" id="input" placeholder={this.props.text}></input> */}
        <input type="text" ref={this.textInput} placeholder={this.props.text} />

        <Btn onClick={this.focusTextInput} className={'addBtn'} input_text={'Add'} />
      </>
    );
  }
}
