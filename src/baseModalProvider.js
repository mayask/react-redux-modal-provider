import React, { Component } from 'react';
import PropTypes from 'prop-types';

import eventEmitter from './eventEmitter';
import { DELAY_BEFORE_REMOVE_MSEC } from './constants';

export default class BaseModalProvider extends Component {
  componentWillMount() {
    eventEmitter.on('showModal', (args) => this.props.showModal(...args));
  }

  componentWillUnmount() {
    eventEmitter.removeListener('showModal');
  }

  hideModal(id, delayBeforeRemoveMsec = DELAY_BEFORE_REMOVE_MSEC) {
    this.props.hideModal(id);
    setTimeout(
      () => {
        this.props.removeModal(id);
      },
      delayBeforeRemoveMsec,
    );
  }

  render() {
    return (
      <div>
        {this.props.modalProvider.stack.map(modal => (
          <modal.component
            key={`@${this.constructor.name}_MODAL_${modal.id}`}
            {...modal.props}
            hideModal={() => this.hideModal(modal.id, modal.delayBeforeRemoveMsec)}
            show={modal.show}
          />
        ))}
      </div>
    );
  }
}

BaseModalProvider.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  removeModal: PropTypes.func.isRequired,
  modalProvider: PropTypes.shape({
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        component: PropTypes.oneOfType([
          PropTypes.element,
          PropTypes.func,
          PropTypes.node,
          PropTypes.elementType
        ]).isRequired,
        props: PropTypes.object,
        show: PropTypes.bool.isRequired,
      }),
    ),
  }).isRequired,
};
