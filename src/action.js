import { DELAY_BEFORE_REMOVE_MSEC } from './constants';

export const ActionType = {
  SHOW: '@react-redux-modal-provider.show',
  HIDE: '@react-redux-modal-provider.hide',
  REMOVE: '@react-redux-modal-provider.remove',
};

export const showModal = (component, props = {}, delayBeforeRemoveMsec = DELAY_BEFORE_REMOVE_MSEC) => {
  if (!component) {
    return undefined;
  }

  return {
    type: ActionType.SHOW,
    component,
    props,
    delayBeforeRemoveMsec,
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
