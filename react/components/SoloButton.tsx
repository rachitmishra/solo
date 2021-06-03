import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ColorMode, colors, useDarkMode} from 'utils/SoloColors';
import SoloText from './SoloText';

type SoloButtonProps = {
  onPress: () => any;
  style?: {};
  label: string;
  textColor?: ColorMode;
  textSize?: number;
};

const SoloButton = ({
  onPress,
  style,
  label,
  textColor,
  textSize,
}: SoloButtonProps) => {
  const isDarkMode = useDarkMode();
  const _colorStyle = {
    color: colors.of(colors.text.button, isDarkMode),
  };
  const colorStyle = textColor
    ? {color: colors.of(textColor, isDarkMode)}
    : _colorStyle;

  const _fontSizeStyle = {fontSize: textSize ? textSize : 16};

  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      onPress={() => {
        onPress();
      }}>
      <SoloText style={[styles.txt, _colorStyle, colorStyle, _fontSizeStyle]}>
        {label}
      </SoloText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 100,
    paddingHorizontal: 12,
  },
  txt: {
    fontSize: 18,
  },
});

export default SoloButton;
