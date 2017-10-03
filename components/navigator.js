import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Header, Text } from 'react-native-elements';
import RaceList from '../components/raceList';
import RaceDetails from '../components/raceDetails';

const navigationOptions = {
  header: () => (
    <Header
      centerComponent={
        <Text h2 style={{ color: '#fff' }}>
          {' '}
          XCZLD{' '}
        </Text>
      }
      backgroundColor="#009688"
    />
  )
};

const Navigator = StackNavigator(
  {
    Home: { screen: RaceList, navigationOptions },
    Race: { screen: RaceDetails, navigationOptions }
  },
  {
    initialRouteName: 'Home'
  }
);

export default Navigator;
