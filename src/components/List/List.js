import React, { useEffect, useState } from "react";
import "./index.css";
import { Btn } from "../Btn/Btn";

export const List = ({ newtask }) => {

  // const ischecked = [];

  const [tasks, setTasks] = useState([
      "Task A", 
      "Task B", 
      "Task C"
    ]);

  // const [checked, setchecked] = useState([]);

  // console.log(tasks);

  useEffect(() => {
    setTasks((previousState) => {
      if (newtask != null) {
        //   for double same values
        // if (previousState.includes(value)) {
        //   return previousState;
        // }
        return [...previousState, newtask];
      }
      else{
          return previousState;
      }
    });
  }, [newtask]);

  // Event + parameter: https://stackoverflow.com/a/42597619
  const clickhandler = (e, index) => {
    // Not using toggle because we need to set whether they are checked or not.
    e.currentTarget.classList.toggle("checked");

    // if(e.currentTarget.classList.value !== 'checked'){
    //   e.currentTarget.classList.value = 'checked';
    //   ischecked[index] = 1;
    //   // console.log('unche');
    //   setchecked((previousState) => {
    //     return ischecked;
    //   })
      
    // }
    // else{
    //   // console.log('chec');
    //   e.currentTarget.classList.toggle("checked");
    //   ischecked[index] = 0;
    //   setchecked((previousState) => {
    //     return ischecked;
    //   })
    // }
    
    

    // console.log(e.currentTarget.classList.value);
    // e.currentTarget.classList.toggle("checked");
    // console.log(ischecked);
    // console.log(checked);
  };

  function close(itemIndex) {
    //e.currentTarget.parentNode.style.display = 'none';
    setTasks(tasks.filter((item, index) => index !== itemIndex));
  }

  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <li onClick={(e) => clickhandler(e, index)} key={`${task}-${index}`}>
          {task}
          <Btn
            onClick={() => close(index)}
            className="xButton"
            input_text={"\u00D7"}
          />
        </li>
      ))}
    </ul>
  );
};
