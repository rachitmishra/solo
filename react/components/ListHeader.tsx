import {getDuration, getName} from 'data/Store';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ListSeparator from './ListSeparator';
import SoloButtonSetting from './SoloButtonSetting';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';
import SoloTextHeadline from './SoloTextHeadline';

type HeaderProps = {
  navigation: any;
  spends: number;
};
const Header = ({navigation, spends}: HeaderProps) => {
  const colorStyleLight = {
    color: colors.of(colors.text.label, useDarkMode()),
  };
  const colorStyle = {
    color: colors.of(colors.text.title, useDarkMode()),
  };

  const duration = getDuration() ?? 'month';
  const [_duration, _setDuration] = useState<string>(duration);
  const [_spends, _setSpends] = useState<number>(
    duration === 'month' ? spends : spends * 12,
  );
  const onDurationChange = () => {
    if (_duration === 'month') {
      _setDuration('year');
      _setSpends(spends * 12);
    } else {
      _setDuration('month');
      _setSpends(spends);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <SoloTextHeadline headline={`👋 ${getName() ?? 'Hello'},`} />
        <SoloButtonSetting navigation={navigation} />
      </View>
      <View style={styles.paragraph}>
        <SoloText
          text={'You are spending '}
          style={[styles.text, colorStyleLight]}
        />
        <SoloText style={[styles.clickable, colorStyle]}>
          {`₹${_spends ? _spends : 0}`}
        </SoloText>
        <SoloText text={' every '} style={[styles.text, colorStyleLight]} />
        <TouchableOpacity onPress={() => onDurationChange()}>
          <SoloText
            style={[styles.clickable, colorStyle]}>{`${_duration}`}</SoloText>
        </TouchableOpacity>
      </View>
      <ListSeparator dotted={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 16,
  },
  paragraph: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 22,
    margin: 16,
    includeFontPadding: true,
    lineHeight: 32,
  },
  text: {
    fontSize: 20,
  },
  clickable: {
    fontSize: 22,
  },
  settings: {
    paddingHorizontal: 16,
    marginEnd: 16,
    marginTop: 0,
  },
});

export default Header;
