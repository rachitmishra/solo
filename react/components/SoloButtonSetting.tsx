import React from 'react';
import {StyleSheet} from 'react-native';
import SoloButton from './SoloButton';

type SoloButtonSettingProps = {
  navigation: any;
};

const SoloButtonSetting = ({navigation}: SoloButtonSettingProps) => {
  return (
    <SoloButton
      onPress={() => navigation.navigate('settings')}
      style={styles.btn}
      label={'Settings'}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    marginEnd: 16,
  },
});

export default SoloButtonSetting;
