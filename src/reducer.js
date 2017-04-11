import { ActionType } from './action';

const reducer = (
  state = {
    stack: [],
  },
  action,
) => {
  switch (action.type) {
    case ActionType.SHOW:
      return {
        ...state,
        stack: [
          ...state.stack,
          {
            id: new Date().valueOf(),
            component: action.component,
            props: action.props,
            show: true,
          },
        ],
      };

    case ActionType.HIDE:
      const targetModal = state.stack.find(modal => modal.id === action.id)

      if (!targetModal) {
        return state;
      }

      return {
        ...state,
        stack: [
          ...state.stack.filter(modal => state.stack.indexOf(modal) < state.stack.indexOf(targetModal)),
          {
            ...targetModal,
            show: false,
          },
          ...state.stack.filter(modal => state.stack.indexOf(modal) > state.stack.indexOf(targetModal)),
        ],
      };

    case ActionType.REMOVE:
      return {
        ...state,
        stack: state.stack.filter(modal => modal.id !== action.id),
      };

    default:
      return state;
  }
};

export default reducer;
