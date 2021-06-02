import React from 'react';
import {StyleSheet} from 'react-native';
import SoloText from './SoloText';

const Footer = () => {
  return <SoloText style={styles.rocket}>✨</SoloText>;
};

const styles = StyleSheet.create({
  rocket: {
    fontSize: 32,
    padding: 32,
    flex: 1,
    textAlign: 'center',
  },
});

export default Footer;
