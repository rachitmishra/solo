import {useColorScheme} from 'react-native';

export const useDarkMode = (): boolean => {
  return useColorScheme() === 'dark';
};

export type ColorMode = {
  light: string;
  dark: string;
};
type Color = {
  mode: ColorMode;
};

export const colors = {
  primary: {
    light: '#60ad5e',
    dark: '#005005',
  },
  background: {
    light: '#eee',
    dark: '#222',
  },
  shadow: {
    light: '#eee',
    dark: '#222',
  },
  negative: {
    light: 'crimson',
    dark: 'crimson',
  },
  positive: {
    light: 'green',
    dark: 'darkgreen',
  },
  text: {
    title: {
      light: '#333',
      dark: '#eee',
    },
    subtitle: {
      light: '#333',
      dark: '#eee',
    },
    button: {
      light: '#333',
      dark: '#eee',
    },
    input: {
      light: '#333',
      dark: '#eee',
    },
    label: {
      light: '#444',
      dark: '#ddd',
    },
    hint: {
      light: '#888',
      dark: '#666',
    },
    buttonSelected: {
      dark: 'yellow',
      light: 'green',
    },
  },
  separator: {
    light: '#cdc',
    dark: '#444',
  },
  button: {
    primary: {
      dark: 'teal',
      light: '#fff',
    },
    selected: {
      dark: 'yellow',
      light: 'teal',
    },
  },
  of: (color: ColorMode, mode: boolean): string => {
    if (mode) {
      return color.dark;
    } else {
      return color.light;
    }
  },
};
