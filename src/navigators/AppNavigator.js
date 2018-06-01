import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';

export const AppNavigator = StackNavigator({
  LoggedOut: { screen: LoggedOut },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener: listener })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);