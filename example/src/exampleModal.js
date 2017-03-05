import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { showModal } from 'react-redux-modal-provider';

let ExampleModal;

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
          message: props.message,
        })}
      >
        Show another modal
      </Button>
    </Modal.Footer>
  </Modal>
);

ExampleModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  index: PropTypes.number,
  message: PropTypes.string.isRequired,
}

ExampleModalComponent.defaultProps = {
  index: 1,
};

ExampleModal = connect(null, { showModal })(ExampleModalComponent);

const ExampleModalToExport = ExampleModal;

export default ExampleModalToExport;
