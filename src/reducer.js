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
      if (action.index === 0 && state.stack.length === 1) {
        return {stack: []};
      }

      return {
        stack: [
          ...state.stack.slice(0, action.index - 1),
          ...state.stack.slice(action.index),
        ]
      };

    default:
      return state;
  }
};

export default reducer;
