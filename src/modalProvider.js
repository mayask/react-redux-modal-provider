import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  hideModal,
} from './action';

const ModalProvider = props => (
  <div>
    {
      props.modalProvider.stack.map((modal, index) =>
        <modal.component
          key={`@react-redux-modal-provider_MODAL_${index}`}
          {...modal.props}
          hideModal={props.hideModal.bind(null, index)}
          show={modal.show}
        />
      )
    }
  </div>
);

export default connect(({modalProvider}) => ({
  modalProvider,
}), {
  hideModal,
})(ModalProvider);
