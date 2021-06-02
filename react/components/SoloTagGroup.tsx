import {Tag} from 'data/Tag';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SoloText from './SoloText';

type SoloTagProp = {
  tag: Tag;
};

type SoloTagGroupProps = {
  tags: Tag[];
};

const SoloTagGroup = ({tags}: SoloTagGroupProps) => {
  const renderTagItem = (tag: Tag) => {
    const tagBgStyle = {color: tag.color};
    return <SoloText style={[tagBgStyle, styles.tagBg]}>{tag.key}</SoloText>;
  };

  return (
    <View style={[styles.tagRow]}>
      {tags.map(tag => {
        return renderTagItem(tag);
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tagBg: {
    marginStart: 8,
    fontSize: 13,
  },
  tagRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
});
export default SoloTagGroup;
