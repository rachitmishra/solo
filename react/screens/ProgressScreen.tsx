import SoloTextHeadline from 'components/SoloTextHeadline';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <SoloTextHeadline headline={'Loading ⌛'} />
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
  },
});

export default ProgressScreen;
