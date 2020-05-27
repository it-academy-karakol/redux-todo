import React from "react";
import NewItem from "./NewItem/NewItem";
import Item from "./Item/Item";
import classes from "./Items.module.css";
import { useSelector } from "react-redux";

export default () => {
  const { items } = useSelector((state) => state);

  let itemsOutput = Object.keys(items || {})
    .filter(id => items[id] !== null)
    .map((id) => (
      <Item key={id} id={id} completed={items[id].completed}>
        {items[id].text}
      </Item>
    ));
  if (itemsOutput.length < 1) {
    itemsOutput = <li>No items</li>
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
