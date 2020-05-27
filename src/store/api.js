import axios from "../axios";
import { load, add } from "./actions";

export const loadItems = dispatch => axios.get("/items.json")
  .then(response => load(dispatch, response.data))
  .catch(error => {});

export const addItem = (dispatch, item) => axios.post("/items.json", item)
  .then(response => add(dispatch, response.data.name, item))
  .catch(error => {});