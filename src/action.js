
export const ActionType = {
  SHOW: '@react-redux-modal-provider.show',
  HIDE: '@react-redux-modal-provider.hide',
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
