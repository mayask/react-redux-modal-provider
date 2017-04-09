export const ActionType = {
  SHOW: '@react-redux-modal-provider.show',
  HIDE: '@react-redux-modal-provider.hide',
  REMOVE: '@react-redux-modal-provider.remove',
};

export const showModal = (component, props = {}) => {
  if (!component) {
    return undefined;
  }

  return {
    type: ActionType.SHOW,
    component,
    props,
  };
};

export const hideModal = id => ({
  type: ActionType.HIDE,
  id,
});

export const removeModal = id => ({
  type: ActionType.REMOVE,
  id,
});
