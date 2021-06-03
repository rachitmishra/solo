import {Keyed} from 'data/Tag';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SoloSelectableButton from './SoloSelectableButton';
import SoloTextLabel from './SoloTextLabel';

type SoloSelectableButtonGroupProps = {
  label: string;
  items: Keyed[];
  selectedIds: number[];
  onPressed: (key: string[]) => any;
  singleSelection: boolean;
};

const SoloSelectableButtonGroup = ({
  label,
  items,
  selectedIds,
  onPressed,
  singleSelection,
}: SoloSelectableButtonGroupProps) => {
  const [_selectedIds, _setSelectedIds] = useState<number[]>(selectedIds);

  const _onPress = (idx: number) => {
    let newSelectedIds: number[] = [];
    newSelectedIds.concat(selectedIds ?? []);

    if (singleSelection) {
      newSelectedIds.pop();
      newSelectedIds.push(idx);
    } else {
      newSelectedIds.includes(idx)
        ? newSelectedIds.splice(newSelectedIds.indexOf(idx) - 1, 1)
        : [idx].concat(newSelectedIds);
    }

    onPressed(
      newSelectedIds.map(idx1 => {
        return items[idx1].key;
      }),
    );

    _setSelectedIds(newSelectedIds);
  };

  const _renderSelectables = () => {
    return items.map((tag: Keyed, idx: number) => {
      const selected = _selectedIds.includes(idx);
      return (
        <SoloSelectableButton
          onPress={() => {
            _onPress(idx);
          }}
          key={tag.key}
          label={tag.readable ? tag.readable : tag.key}
          selected={selected}
        />
      );
    });
  };

  return (
    <View>
      <SoloTextLabel style={styles.label} label={label} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.selectableRow}>{_renderSelectables()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginStart: 16,
    marginTop: 0,
  },
  selectableRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4,
    marginBottom: 4,
    marginStart: 16,
  },
});

export default SoloSelectableButtonGroup;
