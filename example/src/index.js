import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ModalProvider from 'react-redux-modal-provider';

import rootReducer from './reducer';

import App from './app';

const store = createStore(rootReducer);

export default render(
  <Provider store={store}>
    <div>
      <App />
      <ModalProvider />
    </div>
  </Provider>,
  document.getElementById('app'),
);
