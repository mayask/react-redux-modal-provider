import { connect } from 'react-redux';

import { showModal, hideModal, removeModal } from './action';
import BaseModalProviderComponent from './baseModalProvider';

class StackableModalProvider extends BaseModalProviderComponent {
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
)(StackableModalProvider);
