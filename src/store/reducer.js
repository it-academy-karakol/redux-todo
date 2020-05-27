import * as actionTypes from "./actionTypes";

const initialState = {
  items: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD:
      return { ...state, items: action.items };

    case actionTypes.ADD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: action.item,
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
