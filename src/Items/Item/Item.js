import React from "react";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import { toggle, remove } from "../../store/actions";

export default ({ id, completed, children }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.Item}>
      <span
        onClick={() => toggle(dispatch, id, !completed)}
        className={completed ? classes.completed : null}
      >
        {children}
      </span>
      <button onClick={() => remove(dispatch, id)}>x</button>
    </li>
  );
};
