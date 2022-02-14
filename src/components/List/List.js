import React, { useEffect, useState } from "react";
import "./index.css";
import { Btn } from "../Btn/Btn";

export const List = ({ newtask }) => {

  const [tasks, setTasks] = useState([
      ["Task A", false], 
      ["Task B", false], 
      ["Task C", true]
    ]);

  useEffect(() => {
    setTasks((previousState) => {
      if (newtask != null) {
        // for double same values
        if (previousState.includes(newtask)) {
          return previousState;
        }
        return [...previousState, [newtask, false]];
      }
      else{
          return previousState;
      }
    });
  }, [newtask]);

  // Event + parameter: https://stackoverflow.com/a/42597619
  const clickhandler = (e, index) => {
    console.log('task ' + index + ' is clicked');
    e.currentTarget.classList.toggle("checked");
  };

  function close(e, itemIndex) {
    //e.currentTarget.parentNode.style.display = 'none';
    console.log('task ' + itemIndex + ' has been closed');
    setTasks(tasks.filter((item, index) => index !== itemIndex));
    
    // To stop the code from dropping further // Ref: https://stackoverflow.com/q/50829705
    e.stopPropagation();
  }

  return (
    <ul id="list">
      {tasks.map((task, index) => (
        <li className = {task[1] ? 'checked' : ''} onClick={(e) => clickhandler(e, index)} key={`${task}-${index}`}>
          {task}
          <Btn
            onClick={(e) => close(e, index)}
            className="xButton"
            input_text={"\u00D7"}
          />
        </li>
        
      ))}
    </ul>
  );
};
