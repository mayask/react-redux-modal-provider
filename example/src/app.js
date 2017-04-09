import React, { Component } from 'react';
import { showModal } from 'react-redux-modal-provider';

import ExampleModal from './exampleModal';

class App extends Component {
  state = {
    message: 'Pass me to the modal'
  }

  render() {
    return (
      <div>
        <p>
          React Modal Provider App
        </p>
        <p>
          <input
            type="text"
            onChange={e => this.setState({message: e.target.value})}
          />
        </p>
        <p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => showModal(ExampleModal, {
              message: this.state.message
            })}>
            Launch demo modal
          </button>
        </p>
      </div>
    );
  }
}

export default App;
