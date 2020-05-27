import axios from "../axios";
import { load } from "./actions";

export const loadItems = dispatch => axios.get("/items.json")
  .then(response => load(dispatch, response.data))
  .catch(error => {});