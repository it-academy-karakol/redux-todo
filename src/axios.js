import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://it-academy-todo.firebaseio.com";

export default instance;