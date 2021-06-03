import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type CenterProps = {
  children?: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
};

const Center = ({children, style}: CenterProps) => {
  return <View style={[styles.center, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

export default Center;
