import {ActionType} from './action';

const reducer = (state={
  stack: [],
}, action) => {
  switch (action.type) {
    case ActionType.SHOW:
      return {
        stack: [
          ...state.stack,
          {
            component: action.component,
            props: action.props,
            show: true,
          }
        ]
      };

    case ActionType.HIDE:
      return {
        stack: [
          ...state.stack.slice(0, action.index),
          {
            ...state.stack[action.index],
            show: false
          },
          ...state.stack.slice(action.index + 1),
        ]
      };

    case ActionType.REMOVE:
      return {
        stack: [
          ...state.stack.slice(0, action.index),
          ...state.stack.slice(action.index + 1),
        ]
      };

    default:
      return state;
  }
};

export default reducer;
