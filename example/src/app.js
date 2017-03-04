import React from 'react';
import {connect} from 'react-redux';
import {showModal} from 'react-redux-modal-provider';

import ExampleModal from './exampleModal';

const App = props =>
  <div>
    <p>
      Hello from App
    </p>
    <p>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => props.showModal(ExampleModal)}>
        Launch demo modal
      </button>
    </p>
  </div>;

export default connect(null, {
  showModal,
})(App);
