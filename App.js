// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import connect from './redux/connect';
import store from './redux/store';
import AppNavigator from './components/AppNavigator';
import { getNav } from './redux/selectors/appNavigation';

@connect({ state: getNav })
class AppWithNavigationState extends Component {
  render() {
    const { dispatch, state } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state
        })}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
