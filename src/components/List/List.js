import React, { useEffect, useState } from "react";
import "./index.css";
import { Btn } from "../Btn/Btn";

export const List = ({ newtask }) => {
  const [tasks, setTasks] = useState([
    {
      task: "Gym",
      checked: false,
    },
    {
      task: "Study",
      checked: false,
    },
    {
      task: "Job",
      checked: false,
    },
  ]);

  // console.log(tasks[0].task);

  useEffect(() => {
    setTasks((previousState) => {
      if (newtask != null) {
        // for double same values
        if (previousState.includes(newtask)) {
          return previousState;
        }
        return [...previousState, {task: newtask, checked: false}];
      } else {
        return previousState;
      }
    });
  }, [newtask]);

  // Event + parameter: https://stackoverflow.com/a/42597619
  const newclickhandler = (e, index) => {
    //e.currentTarget.classList.toggle("checked");
    console.log("task " + index + " is clicked");
    
    // This can be done beteer. Reassigning output to a new array.
    // Why not rendering again when using the tasks state.
    var z = []

    tasks.filter((nta, i) => {
      if (i == index) {
        nta.checked = !nta.checked;
        z[i] = nta
      }
      else{
        z[i] = nta
      }
    });
    console.log(z);
    console.log(tasks);
    setTasks(z);
  };

  function newclose(e, indd) {
    console.log("task " + indd + " has been deleted");
    setTasks(tasks.filter((ntb, i) => i !== indd));
    // To stop the code from dropping further // Ref: https://stackoverflow.com/q/50829705
    e.stopPropagation();
  }


  return (
    <ul id="list">
      {tasks.map((nt, index) => (
        <li
          className={nt.checked ? "checked" : ""}
          onClick={(e) => newclickhandler(e, index)}
          key={`${nt.task}-${index}`}
        >
          {nt.task}
          <Btn
            onClick={(e) => newclose(e, index)}
            className="xButton"
            input_text={"\u00D7"}
          />
        </li>
      ))}
      {/* {tasks.map((nt) => nt.task)} */}
    </ul>
  );
};
