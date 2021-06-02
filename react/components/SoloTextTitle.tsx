import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloTextTitleProps = {
  title: string;
};

const SoloTextTitle = ({title}: SoloTextTitleProps) => {
  const txtColor = {
    color: colors.of(colors.text.title, useDarkMode()),
  };

  return <SoloText style={[styles.title, txtColor]}>{title}</SoloText>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 16,
    includeFontPadding: true,
  },
});

export default SoloTextTitle;
