import React, { PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { showModal } from 'react-redux-modal-provider';

const ExampleModal = props => (
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
        onClick={() => showModal(ExampleModal, {
          index: props.index + 1,
          message: props.message,
        })}
      >
        Show another modal
      </Button>
    </Modal.Footer>
  </Modal>
);

ExampleModal.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  index: PropTypes.number,
  message: PropTypes.string.isRequired,
}

ExampleModal.defaultProps = {
  index: 1,
};

export default ExampleModal;
