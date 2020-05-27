import React from "react";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import { toggle, remove } from "../../store/actions";
import { toggleItem } from "../../store/api";

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
      <button onClick={() => remove(dispatch, id)}>x</button>
    </li>
  );
};
