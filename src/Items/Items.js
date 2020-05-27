import React, { useEffect } from "react";
import NewItem from "./NewItem/NewItem";
import Item from "./Item/Item";
import classes from "./Items.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loadItems } from "../store/api";

export default () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state);

  useEffect(() => loadItems(dispatch), [dispatch]);

  let itemsOutput = <li>Loading...</li>;
  if (items !== null) {
    itemsOutput = Object.keys(items)
      .filter(id => items[id] !== null)
      .map((id) => <Item key={id} id={id} {...items[id]} />);
  }
  if (itemsOutput.length < 1) {
    itemsOutput = <li>No items</li>;
  }

  return (
    <ul className={classes.Items}>
      <li>
        <NewItem />
      </li>
      {itemsOutput}
    </ul>
  );
};
