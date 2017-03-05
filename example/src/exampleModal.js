import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import {showModal} from 'react-redux-modal-provider';

const ExampleModalComponent = props => (
  <Modal show={props.show}>
    <Modal.Header>
      <Modal.Title>Hello {props.index}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {props.message}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={props.hideModal}>Close</Button>
      <Button
        bsStyle="primary"
        onClick={() => props.showModal(ExampleModal, {
          index: props.index + 1,
          message: props.message
        })}>
        Show another modal
      </Button>
    </Modal.Footer>
  </Modal>
);

ExampleModalComponent.defaultProps = {
  index: 1,
};

const ExampleModal = connect(null, { showModal })(ExampleModalComponent);

export default ExampleModal;
