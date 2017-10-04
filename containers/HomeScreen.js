import React, { Component } from 'React';
import { addNavigationHelpers } from 'react-navigation';
import connect from '../redux/connect';
import HomeTabNavigator from '../components/HomeTabNavigator';
import { getHomeNav } from '../redux/selectors/tabNavigation';

@connect({ state: getHomeNav })
export default class HomeScreen extends Component {
  render() {
    const { dispatch, state } = this.props;

    return (
      <HomeTabNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state
        })}
      />
    );
  }
}
