import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloTextLabelProps = {
  label: string;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};

const SoloTextLabel = ({label, style}: SoloTextLabelProps) => {
  const colorStyle = {
    color: colors.of(colors.text.label, useDarkMode()),
  };

  return <SoloText style={[styles.label, colorStyle, style]}>{label}</SoloText>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 4,
  },
});

export default SoloTextLabel;
