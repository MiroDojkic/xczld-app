// @flow
import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';
import type { NavigationNavigatorProps } from 'react-navigation';
import connect from '../redux/connect';
import * as actions from '../redux/modules/clubs';
import { getIsLoading, getClubs } from '../redux/selectors/clubs';
import noop from '../utils/noop';

type Club = {
  name: string,
  points: number,
  racers_count: number
};

type Info = {
  item: Club
};

type Props = {
  load: () => mixed,
  initialLoad: () => mixed,
  clubs: Club[],
  isLoading: boolean,
  navigation: NavigationNavigatorProps
};

type DefaultProps = {
  clubs: [],
  isLoading: boolean
};

@connect(
  {
    clubs: getClubs,
    isLoading: getIsLoading
  },
  {
    load: actions.load,
    initialLoad: actions.initialLoad
  }
)
class ClubList extends PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    clubs: [],
    isLoading: false,
    load: noop
  };

  componentDidMount() {
    this.props.initialLoad();
  }

  renderItem = ({ item }: Info) => (
    <ListItem
      title={`${item.name}`}
      rightTitle={`${item.points} Bodova`}
      rightTitleStyle={styles.rightTitle}
      subtitle={`Broj članova: ${item.racers_count}`}
    />
  );

  render() {
    const { clubs, load, isLoading } = this.props;

    return (
      <View>
        <List style={styles.list}>
          <FlatList
            keyExtractor={({ id }) => id}
            renderItem={this.renderItem}
            data={clubs}
            ListEmptyComponent={<Text> Nema podataka </Text>}
            onRefresh={load}
            refreshing={!!isLoading}
          />
        </List>
      </View>
    );
  }
}

export default ClubList;

const styles = {
  list: {
    height: '100%'
  },
  rightTitle: {
    color: '#ff5252'
  }
};
