import React from 'react';
import {StyleSheet} from 'react-native';
import SoloButton from './SoloButton';
import {colors} from '../utils/SoloColors';
import SoloButtonNeomorph from './SoloButtonNeomorph';

type SoloButtonCloseProps = {
  navigation: any;
};
const SoloButtonClose = ({navigation}: SoloButtonCloseProps) => {
  return (
    <SoloButtonNeomorph buttonWidth={44}>
      <SoloButton
        onPress={() => navigation.navigate('home')}
        style={styles.btn}
        label={'×'}
        textSize={20}
        textColor={colors.text.button}
      />
    </SoloButtonNeomorph>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
});

export default SoloButtonClose;
