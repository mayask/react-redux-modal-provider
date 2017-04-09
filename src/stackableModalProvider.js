import { connect } from 'react-redux';

import { hideModal, removeModal } from './action';
import BaseModalProviderComponent from './baseModalProvider';

class StackableModalProvider extends BaseModalProviderComponent {
}

export default connect(
  ({ modalProvider }) => ({
    modalProvider,
  }),
  {
    hideModal,
    removeModal,
  },
)(StackableModalProvider);
