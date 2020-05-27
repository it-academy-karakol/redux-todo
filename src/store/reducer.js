import * as actionTypes from './actionTypes';

const initialState = {
  items: {
    1: { text: "Finish homework", completed: false },
    2: { text: "Cook a dinner", completed: true },
  },
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.ADD:
      const id = Math.floor(Math.random() * 100000);
      newState.items[id] = {
        text: action.text,
        completed: false,
      };
      return newState;

    case actionTypes.TOGGLE:
      newState.items[action.id].completed = !newState.items[action.id]
        .completed;
      return newState;

    case actionTypes.DELETE:
      delete newState.items[action.id];
      return newState;

    default:
      return newState;
  }
};
