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
  const ItemRow = () => {
    return (
      <View style={[styles.row]}>
        <SoloText style={[styles.item, colorStyle]}>{item.key}</SoloText>
        <SoloText style={[styles.itemValue, colorStyle]}>{`₹${
          item.value ? item.value : 0
        }`}</SoloText>
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
    paddingHorizontal: 16,
    fontSize: 20,
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
