import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Header, Text } from 'react-native-elements';
import HomeScreen from '../containers/HomeScreen';
import RaceDetails from '../components/raceDetails';

const header = (
  <Header
    centerComponent={
      <Text h2 style={{ color: '#fff' }}>
        XCZLD
      </Text>
    }
    backgroundColor="#009688"
  />
);

const navigationOptions = {
  header
};

const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions },
    Race: { screen: RaceDetails, navigationOptions }
  },
  {
    initialRouteName: 'Home'
  }
);

export default AppNavigator;
