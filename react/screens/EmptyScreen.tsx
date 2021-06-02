import SoloButton from 'components/SoloButton';
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
          <SoloButton
            onPress={() => navigation.navigate('add')}
            label={'+ Add Subscription'}
          />
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
    marginTop: 8,
  },
  greet: {
    textAlign: 'center',
  },
});

export default EmptyScreen;
