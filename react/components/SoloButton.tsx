import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ColorMode, colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloButtonProps = {
  onPress: () => any;
  style?: {};
  shadow?: boolean;
  label: string;
  textColor?: ColorMode;
};

const SoloButton = ({
  onPress,
  style,
  shadow,
  label,
  textColor,
}: SoloButtonProps) => {
  const isDarkMode = useDarkMode();
  const _colorStyle = {
    color: colors.of(colors.text.button, isDarkMode),
  };
  const shadowStyle = shadow ? styles.shadow : {};
  const backgroundStyle = {
    backgroundColor: colors.of(colors.button.primary, isDarkMode),
  };
  const colorStyle = textColor
    ? {color: colors.of(textColor, isDarkMode)}
    : _colorStyle;

  return (
    <TouchableOpacity
      style={[styles.btn, shadowStyle, backgroundStyle, style]}
      onPress={() => {
        onPress();
      }}>
      <SoloText style={[styles.txt, _colorStyle, colorStyle]}>{label}</SoloText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 100,
    paddingHorizontal: 12,
  },
  shadow: {
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  txt: {
    fontSize: 16,
  },
});

export default SoloButton;
