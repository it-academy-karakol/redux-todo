import axios from "../axios";
import { load, add, toggle, remove } from "./actions";

export const loadItems = dispatch => axios.get("/items.json")
  .then(({ data }) => load(dispatch, data))
  .catch(() => {});

export const addItem = (dispatch, item) => axios.post("/items.json", item)
  .then(({ data }) => add(dispatch, data.name, item))
  .catch(() => {});

export const toggleItem = (dispatch, id, completed) => axios.put(`/items/${id}/completed.json`, completed)
  .then(() => toggle(dispatch, id, completed))
  .catch(() => {});

export const removeItem = (dispatch, id) => axios.delete(`/items/${id}.json`)
  .then(() => remove(dispatch, id))
  .catch(() => {});