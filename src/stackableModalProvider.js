import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { hideModal, removeModal } from './action';

class StackableModalProvider extends Component {
  hideModal(id) {
    this.props.hideModal(id);
    setTimeout(
      () => {
        this.props.removeModal(id);
      },
      1000,
    );
  }

  render() {
    return (
      <div>
        {this.props.modalProvider.stack.map(modal => (
          <modal.component
            key={`@react-redux-stackable-modal-provider_MODAL_${modal.id}`}
            {...modal.props}
            hideModal={() => this.hideModal(modal.id)}
            show={modal.show}
          />
        ))}
      </div>
    );
  }
}

StackableModalProvider.propTypes = {
  hideModal: PropTypes.func.isRequired,
  removeModal: PropTypes.func.isRequired,
  modalProvider: PropTypes.shape({
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        component: PropTypes.oneOfType([
          PropTypes.element,
          PropTypes.func
        ]).isRequired,
        props: PropTypes.object,
        show: PropTypes.bool.isRequired,
      }),
    ),
  }).isRequired,
};

export default connect(
  ({ modalProvider }) => ({
    modalProvider,
  }),
  {
    hideModal,
    removeModal,
  },
)(StackableModalProvider);
