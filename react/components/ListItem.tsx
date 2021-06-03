import {durationIndices, getDurationIndices} from 'data/Duration';
import {Subscription} from 'data/Subscription';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, useDarkMode} from '../utils/SoloColors';
import SoloText from './SoloText';

type ListItemProps = {
  item: Subscription;
};
const ListItem = ({item}: ListItemProps) => {
  const colorStyle = {
    color: colors.of(colors.text.title, useDarkMode()),
  };
  const labelColorStyle = {
    color: colors.of(colors.text.label, useDarkMode()),
  };
  const ItemRow = () => {
    return (
      <View style={[styles.row]}>
        <SoloText style={[styles.item, colorStyle]}>{item.key}</SoloText>
        <View>
          <SoloText style={[styles.itemValue, colorStyle]}>{`₹${
            item.value ? item.value : 0
          }`}</SoloText>
          <SoloText style={[styles.itemDuration, labelColorStyle]}>{`${
            durationIndices.get(item.duration)?.readable ?? ''
          }`}</SoloText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rowBg}>
      <ItemRow />
      {/* {item.tags ? <SoloTagGroup tags={item.tags} /> : {}} */}
    </View>
  );
};

const styles = StyleSheet.create({
  rowBg: {
    paddingVertical: 8,
  },
  item: {
    fontSize: 18,
  },
  itemValue: {
    paddingHorizontal: 8,
    fontSize: 20,
  },
  itemDuration: {
    paddingHorizontal: 8,
    fontSize: 14,
    textAlign: 'right',
  },
  row: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListItem;
