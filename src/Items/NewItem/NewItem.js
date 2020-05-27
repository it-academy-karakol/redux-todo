import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/api";
import classes from "./NewItem.module.css";

export default () => {
  const dispatch = useDispatch();

  function formSubmit(event) {
    const data = new FormData(event.target);

    addItem(dispatch, { text: data.get("text"), completed: false });

    event.preventDefault();
  }

  return (
    <form onSubmit={formSubmit} className={classes.NewItem}>
      <input type="text" name="text" required />
      <button>Add</button>
    </form>
  );
};
