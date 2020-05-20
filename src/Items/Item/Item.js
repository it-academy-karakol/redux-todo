import React from "react";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";

export default ({ id, completed, children }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.Item}>
      <span
        onClick={() => dispatch({ type: "TOGGLE", id })}
        className={completed ? classes.completed : null}
      >
        {children}
      </span>
      <button onClick={() => dispatch({ type: "DELETE", id })}>x</button>
    </li>
  );
};
