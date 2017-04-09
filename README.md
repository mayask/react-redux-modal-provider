# React Redux Modal Provider

`react-redux-modal-provider` controls the state of your React modal components using Redux.

## Installation
```
npm i --save react-redux-modal-provider
```

## What's new in `v2`

No need to use `connect()` anymore!

### Before:

```jsx
// app.jsx
import { connect } from 'react-redux';
import { showModal } from 'react-redux-modal-provider';
import MyModal from './myModal';

const App = (props) => (
  <div>
    <p>
      Hello world
    </p>
    <button
      type="button"
      onClick={() => props.showModal(MyModal, { message: 'Hello' })}>
      Present modal
    </button>
  </div>
);

export default connect(null, { showModal })(App);
```

### After:

```jsx
// app.jsx
import { showModal } from 'react-redux-modal-provider';
import MyModal from './myModal';

export default (props) => (
  <div>
    <p>
      Hello world
    </p>
    <button
      type="button"
      onClick={() => showModal(MyModal, { message: 'Hello' })}>
      Present modal
    </button>
  </div>
);
```

## Usage

#### 1. Add `<ModalProvider>` to your root component.

```jsx
import ModalProvider from 'react-redux-modal-provider';

export default render(
  <Provider store={store}>
    <div>
      <App />
      <ModalProvider />
    </div>
  </Provider>,
  document.getElementById('app')
);
```

#### 2. Plug in Modal Provider reducer.

```jsx
import { reducer as modalProvider } from 'react-redux-modal-provider';

export default combineReducers({
  modalProvider,
});
```

#### 3. Add modal creation code.

```jsx
// app.jsx
import { showModal } from 'react-redux-modal-provider';
import MyModal from './myModal';

export default (props) => (
  <div>
    <p>
      Hello world
    </p>
    <button
      type="button"
      onClick={() => showModal(MyModal, { message: 'Hello' })}>
      Present modal
    </button>
  </div>
);
```

#### 4. Handle modal closing.

```jsx
// myModal.jsx
import { Modal } from 'react-bootstrap';

export default (props) => (
  <Modal show={props.show}>
    <Modal.Body>
      {props.message}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={props.hideModal}>Ok</Button>
    </Modal.Footer>
  </Modal>
);
```

`show` and `hideModal` props are passed in automatically.

## Implementations

### `StackableModalProvider` (default)

This is the default `ModalProvider` implementation. Each new modal stacks up on top of previous one.

```jsx
import { StackableModalProvider } from 'react-redux-modal-provider';

export default render(
  <Provider store={store}>
    <div>
      <App />
      <StackableModalProvider />
    </div>
  </Provider>,
  document.getElementById('app')
);
```

### `SingleModalProvider`

One modal at a time. Each new modal triggers `hideModal` on previous one.

```jsx
import { SingleModalProvider } from 'react-redux-modal-provider';

export default render(
  <Provider store={store}>
    <div>
      <App />
      <SingleModalProvider />
    </div>
  </Provider>,
  document.getElementById('app')
);
```

## How is it different from [`redux-modal`](https://github.com/yesmeck/redux-modal)?

1. You don't have to think about where your modal component should fit into component tree, because it doesn't really matter where to render a modal.

2. No need to `connect()` your modal component to Redux, unless you want it to be able to create other modals itself.

## Acknowledgements

* Thanks [@yesmeck](https://github.com/yesmeck), author of [`redux-modal`](https://github.com/yesmeck/redux-modal), for webpack config I borrowed.

* Thanks [@diegoddox](https://github.com/diegoddox), author of [`react-redux-toastr`](https://github.com/diegoddox/react-redux-toastr), for the idea how to dispatch actions from anywhere using `EventEmitter`.

## License
MIT
