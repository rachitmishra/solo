import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloTextHeadlineProps = {
  headline: string;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};
const SoloTextHeadline = ({headline, style}: SoloTextHeadlineProps) => {
  const colorStyle = {
    color: colors.of(colors.text.title, useDarkMode()),
  };

  return (
    <SoloText style={[styles.headline, colorStyle, style]}>{headline}</SoloText>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 22,
    marginTop: 16,
    marginBottom: 16,
    includeFontPadding: true,
  },
});

export default SoloTextHeadline;
