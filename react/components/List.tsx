import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import ListSeparator from './ListSeparator';
import Footer from './ListFooter';
import Header from './ListHeader';
import ListItem from './ListItem';
import {Subscription} from 'data/Subscription';
import {getDurationByKey} from 'data/Duration';

type ListProps = {
  navigation: any;
  subscriptions: Subscription[];
};

const renderItem = (item: Subscription, navigation: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('add', {
          subscription: item,
        });
      }}>
      {<ListItem item={item} />}
    </TouchableOpacity>
  );
};

const getSpends = (subscriptions: Subscription[]): number => {
  return subscriptions
    .map(subscription => getSpendPerMonth(subscription))
    .reduce((total, current) => total + current, 0);
};

const getSpendPerMonth = (subscription: Subscription): number => {
  if (!subscription) {
    return 0;
  }

  const duration = getDurationByKey(subscription.duration);
  return subscription.value / (duration ? duration.value : 1);
};

const List = ({navigation, subscriptions}: ListProps) => {
  const spends = Math.ceil(getSpends(subscriptions));
  return (
    <FlatList
      keyExtractor={(item, _index) => item?.key}
      data={subscriptions}
      ListHeaderComponent={Header({navigation, spends})}
      ListFooterComponent={Footer}
      ItemSeparatorComponent={ListSeparator}
      renderItem={({item}) => renderItem(item, navigation)}
    />
  );
};

export default List;
