import * as actionTypes from "./actionTypes";

export const add = (dispatch, text) => {
  dispatch({ type: actionTypes.ADD, text: text });
}

export const toggle = (dispatch, id) => {
  dispatch({ type: actionTypes.TOGGLE, id });
}

export const remove = (dispatch, id) => {
  dispatch({ type: actionTypes.REMOVE, id });
}