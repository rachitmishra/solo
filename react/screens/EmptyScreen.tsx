import SoloButtonAddSubscription from 'components/SoloButtonAddSubscription';
import SoloButtonSetting from 'components/SoloButtonSetting';
import SoloTextHeadline from 'components/SoloTextHeadline';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type EmptyScreenProps = {
  navigation: any;
};

const EmptyScreen = ({navigation}: EmptyScreenProps) => {
  return (
    <View>
      <View style={styles.settings}>
        <View style={styles.space} />
        <SoloButtonSetting navigation={navigation} />
      </View>
      <View style={styles.container}>
        <View>
          <SoloTextHeadline headline={'👋 Hello,'} style={styles.greet} />
          <SoloButtonAddSubscription navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  space: {
    flex: 1,
  },
  settings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingEnd: 16,
  },
  greet: {
    textAlign: 'center',
  },
});

export default EmptyScreen;
