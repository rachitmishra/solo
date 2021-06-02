import {colors, useDarkMode} from 'utils/SoloColors';
import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

type ContainerScreenProps = {
  children?: ReactNode | ReactNode[];
};

const Container = ({children}: ContainerScreenProps) => {
  const backgroundColorStyle = {
    backgroundColor: colors.of(colors.background, useDarkMode()),
  };
  const statusBarStyle = useDarkMode() ? 'light-content' : 'dark-content';
  return (
    <SafeAreaView style={backgroundColorStyle}>
      <StatusBar barStyle={statusBarStyle} />
      {children}
    </SafeAreaView>
  );
};
export default Container;
