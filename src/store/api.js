import axios from "../axios";
import { load, add, toggle, remove } from "./actions";

export const loadItems = dispatch => axios.get("/items.json")
  .then(response => load(dispatch, response.data))
  .catch(error => {});

export const addItem = (dispatch, item) => axios.post("/items.json", item)
  .then(response => add(dispatch, response.data.name, item))
  .catch(error => {});

export const toggleItem = (dispatch, id, completed) => axios.put(`/items/${id}/completed.json`, completed)
  .then(response => toggle(dispatch, id, completed))
  .catch(error => {});

export const removeItem = (dispatch, id) => axios.delete(`/items/${id}.json`)
  .then(response => remove(dispatch, id))
  .catch(error => {});