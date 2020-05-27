import * as actionTypes from "./actionTypes";

const initialState = {
  items: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        items: {
          ...state.items,
          [Math.floor(Math.random() * 100000)]: {
            text: action.text,
            completed: false,
          },
        },
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            completed: action.completed,
          },
        },
      };

    case actionTypes.REMOVE:
      return { ...state, items: { ...state.items, [action.id]: null } };

    default:
      return { ...state };
  }
};
