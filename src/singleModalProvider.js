import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { hideModal, removeModal } from './action';

class SingleModalProvider extends Component {
  componentWillReceiveProps(nextProps) {
    const previousStackSize = this.props.modalProvider.stack.length;
    const nextStackSize = nextProps.modalProvider.stack.length;

    if (nextStackSize > previousStackSize) {
      if (nextStackSize > 1) {
        this.hideModal(nextProps.modalProvider.stack[nextStackSize - 2].id);
      }
    }
  }

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
            key={`@react-redux-single-modal-provider_MODAL_${modal.id}`}
            {...modal.props}
            hideModal={() => this.hideModal(modal.id)}
            show={modal.show}
          />
        ))}
      </div>
    );
  }
}

SingleModalProvider.propTypes = {
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
)(SingleModalProvider);
