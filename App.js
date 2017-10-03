// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import connect from './redux/connect';
import store from './redux/store';
import Navigator from './components/navigator';
import { getNav } from './redux/selectors/navigation';

@connect({ state: getNav })
class AppWithNavigationState extends Component {
  render() {
    const { dispatch, state } = this.props;

    return (
      <Navigator
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
