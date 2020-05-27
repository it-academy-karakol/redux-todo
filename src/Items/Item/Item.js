import React from "react";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

export default ({ id, completed, children }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.Item}>
      <span
        onClick={() => dispatch({ type: actionTypes.TOGGLE, id })}
        className={completed ? classes.completed : null}
      >
        {children}
      </span>
      <button onClick={() => dispatch({ type: actionTypes.DELETE, id })}>x</button>
    </li>
  );
};
