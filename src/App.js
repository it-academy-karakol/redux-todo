import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Items from "./Items/Items";
import classes from "./App.module.css";
import reducer from "./reducers/items";

// 2. Store
const store = createStore(reducer);

export default () => (
  <div className={classes.App}>
    <Provider store={store}>
      <Items />
    </Provider>
  </div>
);
