import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type SoloSelectableButtonProps = {
  onPress: () => any;
  label: string;
  selected: boolean;
};

const SoloSelectableButton = ({
  onPress,
  label,
  selected,
}: SoloSelectableButtonProps) => {
  const isDarkMode = useDarkMode();
  const colorStyle = {
    color: selected
      ? colors.of(colors.text.title, !isDarkMode) // darkmode & selected
      : colors.of(colors.text.title, isDarkMode),
  };

  const backgroundColorStyle = {
    backgroundColor: selected
      ? colors.of(colors.button.selected, isDarkMode)
      : colors.of(colors.button.primary, isDarkMode),
  };
  const borderColorStyle = {
    borderColor: selected
      ? colors.of(colors.button.selected, isDarkMode)
      : colors.of(colors.button.primary, isDarkMode),
  };

  return (
    <TouchableOpacity
      style={[styles.btn, backgroundColorStyle, borderColorStyle]}
      onPress={() => onPress()}>
      <SoloText style={[styles.txt, colorStyle]}>{label}</SoloText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 4,
    marginEnd: 8,
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 1,
    padding: 4,
    paddingHorizontal: 6,
  },
  txt: {
    textTransform: 'uppercase',
    fontSize: 15,
  },
});

export default SoloSelectableButton;
