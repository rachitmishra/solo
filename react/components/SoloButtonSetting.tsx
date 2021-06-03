import React from 'react';
import {StyleSheet} from 'react-native';
import SoloButton from './SoloButton';
import SoloButtonNeomorph from './SoloButtonNeomorph';

type SoloButtonSettingProps = {
  navigation: any;
};

const SoloButtonSetting = ({navigation}: SoloButtonSettingProps) => {
  return (
    <SoloButtonNeomorph buttonWidth={120}>
      <SoloButton
        onPress={() => navigation.navigate('settings')}
        style={styles.btn}
        label={'Settings'}
      />
    </SoloButtonNeomorph>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
  },
});

export default SoloButtonSetting;
