import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloTextLabel from './SoloTextLabel';

type SoloTextInputProps = {
  label?: string;
  hint: string;
  type?: KeyboardTypeOptions;
  txt: string;
  onChange: (txt: string) => void;
};
const SoloTextInput = ({
  label,
  hint,
  type,
  txt,
  onChange,
}: SoloTextInputProps) => {
  const isDarkMode = useDarkMode();

  const placeHolderTextColor = colors.of(colors.text.hint, isDarkMode);
  const colorStyle = {
    color: colors.of(colors.text.input, isDarkMode),
  };

  return (
    <View>
      {label ? <SoloTextLabel label={label} /> : {}}
      <TextInput
        style={[styles.input, colorStyle]}
        placeholder={hint}
        keyboardType={type ?? 'default'}
        defaultValue={txt}
        onChangeText={text => onChange(text)}
        placeholderTextColor={placeHolderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    marginTop: 4,
    marginBottom: 4,
  },
});

export default SoloTextInput;
