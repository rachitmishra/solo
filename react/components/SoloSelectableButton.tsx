import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';
import {NeomorphFlex} from 'react-native-neomorph-shadows';

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

  const _color = selected
    ? colors.of(colors.text.buttonSelected, isDarkMode) // darkmode & selected
    : colors.of(colors.text.button, isDarkMode);

  const colorStyle = {
    color: _color,
  };
  const backgroundColorStyle = {
    backgroundColor: colors.of(colors.shadow, useDarkMode()),
  };

  return (
    <View style={styles.container}>
      <NeomorphFlex style={{...styles.selectable, ...backgroundColorStyle}}>
        <TouchableOpacity style={[styles.btn]} onPress={() => onPress()}>
          <SoloText style={[styles.txt, colorStyle]}>{label}</SoloText>
        </TouchableOpacity>
      </NeomorphFlex>
      <SoloText style={[styles.selected, colorStyle]}>
        {' '}
        {selected ? '•' : ''}
      </SoloText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 8,
    height: 56,
    marginTop: 12,
  },
  btn: {
    padding: 8,
    paddingHorizontal: 12,
  },
  txt: {
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center',
  },
  selectable: {
    shadowRadius: 10,
    borderRadius: 20,
  },
  selected: {
    height: 12,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SoloSelectableButton;
