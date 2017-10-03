import React, { Component } from 'React';
import { addNavigationHelpers } from 'react-navigation';
import connect from '../redux/connect';
import TabNavigator from '../components/TabNavigator';
import { getHomeNav } from '../redux/selectors/tabNavigation';

@connect({ state: getHomeNav })
export default class HomeScreen extends Component {
  render() {
    const { dispatch, state } = this.props;

    return (
      <TabNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state
        })}
      />
    );
  }
}
