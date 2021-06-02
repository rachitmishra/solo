import {
  StyleProp,
  StyleSheet,
  Text as DefaultText,
  TextStyle,
} from 'react-native';
import React, {ReactNode} from 'react';

type SoloTextProps = {
  children?: ReactNode | ReactNode[];
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  text?: string;
};

const SoloText = ({children, style, text}: SoloTextProps) => {
  const mergedStyle = Array.isArray(style)
    ? style?.concat([_styles.txt])
    : [_styles.txt, style];
  return (
    <DefaultText style={mergedStyle}>{text ? text : children}</DefaultText>
  );
};

const _styles = StyleSheet.create({
  txt: {
    fontFamily: 'Rubik-Regular',
  },
});

export default SoloText;
