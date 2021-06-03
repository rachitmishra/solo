import {useFocusEffect} from '@react-navigation/native';
import SoloButtonAddSubscription from 'components/SoloButtonAddSubscription';
import {getSubscriptions} from 'data/Store';
import {Subscription} from 'data/Subscription';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';
import Container from './ContainerScreen';
import EmptyScreen from './EmptyScreen';
import ProgressScreen from './ProgressScreen';

type HomeScreenProps = {
  navigation: any;
};
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [_subscriptions, _setSubscriptions] = useState<Subscription[]>([]);
  const [_progress, _setProgress] = useState(true);

  const _getSubscription = async () => {
    _setProgress(true);
    const subscriptions = await getSubscriptions();
    _setSubscriptions(subscriptions);
    _setProgress(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      _getSubscription();
      return () => {};
    }, []),
  );

  const Content = () => {
    return (
      <View>
        {_subscriptions.length === 0 ? (
          <EmptyScreen navigation={navigation} />
        ) : (
          <View style={styles.container}>
            <List navigation={navigation} subscriptions={_subscriptions} />
            <View style={styles.btnAdd}>
              <SoloButtonAddSubscription navigation={navigation} />
            </View>
          </View>
        )}
      </View>
    );
  };

  return <Container>{_progress ? <ProgressScreen /> : <Content />}</Container>;
};
const styles = StyleSheet.create({
  btnAdd: {
    paddingHorizontal: 24,
    bottom: 24,
    right: 0,
    position: 'absolute',
  },
  container: {height: '100%'},
});

export default HomeScreen;
