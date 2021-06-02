import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloTextTitleProps = {
  title: string;
};

const SoloTextSubTitle = ({title}: SoloTextTitleProps) => {
  const txtColor = {
    color: colors.of(colors.text.subtitle, useDarkMode()),
  };

  return <SoloText style={[styles.subtitle, txtColor]}>{title}</SoloText>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    includeFontPadding: true,
  },
});

export default SoloTextSubTitle;
