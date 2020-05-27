import React from "react";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import { toggleItem, removeItem } from "../../store/api";

export default ({ id, completed, text }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.Item}>
      <span
        onClick={() => toggleItem(dispatch, id, !completed)}
        className={completed ? classes.completed : null}
      >
        {text}
      </span>
      <button onClick={() => removeItem(dispatch, id)}>x</button>
    </li>
  );
};
