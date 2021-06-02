import React from 'react';
import {StyleSheet} from 'react-native';
import SoloButton from './SoloButton';
import {colors} from '../utils/SoloColors';

type SoloButtonCloseProps = {
  navigation: any;
};
const SoloButtonClose = ({navigation}: SoloButtonCloseProps) => {
  return (
    <SoloButton
      onPress={() => navigation.navigate('home')}
      style={styles.btn}
      label={'x'}
      textColor={colors.text.button}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 44,
    height: 32,
  },
});

export default SoloButtonClose;
