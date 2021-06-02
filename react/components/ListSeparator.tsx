import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type ListSeparatorProps = {
  dotted?: boolean;
};

const ListSeparator = ({dotted}: ListSeparatorProps) => {
  const backgroundColorStyle = {
    backgroundColor: colors.of(colors.separator, useDarkMode()),
  };
  const colorStyle = {
    color: colors.of(colors.text.hint, useDarkMode()),
  };
  return dotted ? (
    <View style={styles.center}>
      <SoloText style={(styles.dotted, colorStyle)}>•••</SoloText>
    </View>
  ) : (
    <View style={[styles.separator, backgroundColorStyle]} />
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  separator: {
    marginHorizontal: 16,
    height: 1,
  },
  dotted: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ListSeparator;
