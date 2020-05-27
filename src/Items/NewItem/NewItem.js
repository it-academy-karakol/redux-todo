import React from "react";
import { useDispatch } from "react-redux";
import classes from "./NewItem.module.css";
import { add } from "../../store/actions";

export default () => {
  const dispatch = useDispatch();

  function formSubmit(event) {
    const data = new FormData(event.target);

    add(dispatch, data.get("text"));

    event.preventDefault();
  }

  return (
    <form onSubmit={formSubmit} className={classes.NewItem}>
      <input type="text" name="text" required />
      <button>Add</button>
    </form>
  );
};
