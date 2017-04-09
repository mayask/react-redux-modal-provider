import { connect } from 'react-redux';

import { showModal, hideModal, removeModal } from './action';
import BaseModalProviderComponent from './baseModalProvider';

class SingleModalProvider extends BaseModalProviderComponent {
  componentWillReceiveProps(nextProps) {
    const previousStackSize = this.props.modalProvider.stack.length;
    const nextStackSize = nextProps.modalProvider.stack.length;

    if (nextStackSize > previousStackSize) {
      if (nextStackSize > 1) {
        this.hideModal(nextProps.modalProvider.stack[nextStackSize - 2].id);
      }
    }
  }
}

export default connect(
  ({ modalProvider }) => ({
    modalProvider,
  }),
  {
    showModal,
    hideModal,
    removeModal,
  },
)(SingleModalProvider);
