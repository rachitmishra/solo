import React from 'react';
import {StyleSheet} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {colors, useDarkMode} from 'utils/SoloColors';

type SoloButtonNeomorphProps = {
  children?: ReactNode | ReactNode[];
  buttonWidth?: number;
  buttonHeight?: number;
};

const SoloButtonNeomorph = ({
  children,
  buttonWidth,
  buttonHeight,
}: SoloButtonNeomorphProps) => {
  const backgroundColorStyle = {
    backgroundColor: colors.of(colors.shadow, useDarkMode()),
  };
  const widthStyle = {
    width: buttonWidth ? buttonWidth : 200,
  };
  const heightStyle = {
    height: buttonHeight ? buttonHeight : 44,
  };
  return (
    <Neomorph
      style={{
        ...styles.neomorph,
        ...backgroundColorStyle,
        ...widthStyle,
        ...heightStyle,
      }}>
      {children}
    </Neomorph>
  );
};

export default SoloButtonNeomorph;

const styles = StyleSheet.create({
  neomorph: {
    shadowRadius: 15,
    borderRadius: 25,
  },
});
