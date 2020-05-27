import * as actionTypes from "./actionTypes";

export const load = (dispatch, items) => dispatch({
  type: actionTypes.LOAD, items
})

export const add = (dispatch, id, item) => dispatch({
  type: actionTypes.ADD, id, item
})

export const toggle = (dispatch, id, completed) => dispatch({
  type: actionTypes.TOGGLE, id, completed
});

export const remove = (dispatch, id) => dispatch({
  type: actionTypes.REMOVE, id
});