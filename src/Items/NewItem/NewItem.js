import React from "react";
import { useDispatch } from "react-redux";
import classes from "./NewItem.module.css";
import * as actionTypes from "../../store/actionTypes";

export default () => {
  const dispatch = useDispatch();

  function formSubmit(event) {
    const data = new FormData(event.target);

    dispatch({ type: actionTypes.ADD, text: data.get("text") });

    event.preventDefault();
  }

  return (
    <form onSubmit={formSubmit} className={classes.NewItem}>
      <input type="text" name="text" required />
      <button>Add</button>
    </form>
  );
};
