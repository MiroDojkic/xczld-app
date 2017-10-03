import { TabNavigator } from 'react-navigation';

import ClubList from './clubList';
import RaceList from './raceList';

const HomeScreen = TabNavigator({
  Utrke: {
    screen: RaceList,
  },
  Klubovi: {
    screen: ClubList,
  }
},
{
  tabBarPosition: 'top',
  lazy: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#555',
    style: {
      backgroundColor: '#009688',
      height: 40,
      marginTop: 65
    },
    labelStyle: {
      color: '#fff'
    },
    indicatorStyle: {
      backgroundColor: '#ff5252'
    }
  }
});

export default HomeScreen;
