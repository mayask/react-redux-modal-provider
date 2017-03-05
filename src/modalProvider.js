import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { hideModal, removeModal } from './action';

class ModalProvider extends Component {
  hideModal(index) {
    this.props.hideModal(index);
    setTimeout(
      () => {
        this.props.removeModal(index);
      },
      1000,
    );
  }

  render() {
    return (
      <div>
        {this.props.modalProvider.stack.map((modal, index) => (
          <modal.component
            key={`@react-redux-modal-provider_MODAL_${index}`}
            {...modal.props}
            hideModal={() => this.hideModal(index)}
            show={modal.show}
          />
        ))}
      </div>
    );
  }
}

ModalProvider.propTypes = {
  hideModal: PropTypes.func.isRequired,
  removeModal: PropTypes.func.isRequired,
  modalProvider: PropTypes.shape({
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.element.isRequired,
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
)(ModalProvider);
