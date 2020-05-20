import React from "react";
import NewItem from "./NewItem/NewItem";
import Item from "./Item/Item";
import classes from "./Items.module.css";
import { useSelector } from "react-redux";

export default () => {
  const { items } = useSelector((state) => state);

  const itemsOutput = Object.keys(items).map((id) => (
    <Item key={id} id={id} completed={items[id].completed}>
      {items[id].text}
    </Item>
  ));

  return (
    <ul className={classes.Items}>
      <li>
        <NewItem />
      </li>
      {itemsOutput}
    </ul>
  );
};
