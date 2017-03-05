import React, {Component} from 'react';
import {connect} from 'react-redux';

import {hideModal, removeModal} from './action';

class ModalProvider extends Component {
  hideModal(index) {
    this.props.hideModal(index);
    setTimeout(() => {
      this.props.removeModal(index);
    }, 1000);
  }

  render() {
    return (
      <div>
        {
          this.props.modalProvider.stack.map((modal, index) =>
            <modal.component
              key={`@react-redux-modal-provider_MODAL_${index}`}
              {...modal.props}
              hideModal={this.hideModal.bind(this, index)}
              show={modal.show}
            />
          )
        }
      </div>
    );
  }
}

export default connect(({modalProvider}) => ({
  modalProvider,
}), {
  hideModal,
  removeModal,
})(ModalProvider);
