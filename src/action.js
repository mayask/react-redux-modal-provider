export const ActionType = {
  SHOW: '@react-redux-modal-provider.show',
  HIDE: '@react-redux-modal-provider.hide',
  REMOVE: '@react-redux-modal-provider.remove',
};

export const showModal = (component, props = {}) => {
  if (!component) {
    return;
  }

  return {
    type: ActionType.SHOW,
    component,
    props,
  };
};

export const hideModal = (index) => ({
  type: ActionType.HIDE,
  index,
});

export const removeModal = (index) => ({
  type: ActionType.REMOVE,
  index,
});
