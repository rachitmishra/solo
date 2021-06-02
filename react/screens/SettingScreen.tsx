import SoloButton from 'components/SoloButton';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import Container from './ContainerScreen';
import {colors} from 'utils/SoloColors';
import {clear, getName, setName} from 'data/Store';
import SoloButtonClose from 'components/SoloButtonClose';
import SoloTextTitle from 'components/SoloTextTitle';
import SoloTextLabel from 'components/SoloTextLabel';
import SoloTextSubTitle from 'components/SoloTextSubTitle';
import SoloTextInput from 'components/SoloTextInput';
import ListSeparator from 'components/ListSeparator';

type SettingScreenProps = {
  navigation: any;
};

const AddNewScreen = ({navigation}: SettingScreenProps) => {
  const [_name, _setName] = useState(getName() ?? '');

  const _onNameChange = (name: string) => {
    _setName(name);
    setName(name);
  };

  const _showClearAllWarning = () => {
    Alert.alert(
      '',
      'Caution: This will clear all subscriptions.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, continue',
          style: 'destructive',
          onPress: () => {
            clear();
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <Container>
      <View style={styles.container}>
        <SoloButtonClose navigation={navigation} />
        <SoloTextTitle title="Settings" />
        <View
          style={
            (styles.container,
            {
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'space-between',
            })
          }>
          <View>
            <SoloTextInput
              hint="Rahul"
              label={'Name'}
              txt={_name ? _name : ''}
              onChange={(txt: string) => _onNameChange(txt)}
            />
            <ListSeparator dotted={true} />
            <TouchableOpacity>
              <View style={styles.row}>
                <SoloTextLabel
                  label={'Default Currency'}
                  style={styles.label}
                />
                <SoloTextSubTitle title={'INR (₹)'} />
              </View>
            </TouchableOpacity>
          </View>
          <View />
          <View>
            <SoloTextLabel label={'v0.1'} style={styles.version} />
            <SoloButton
              onPress={() => {
                _showClearAllWarning();
              }}
              style={styles.btnClear}
              label={'Clear All'}
              shadow={false}
              textColor={{
                dark: colors.text.title.dark,
                light: colors.text.title.dark,
              }}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
  },
  label: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  version: {
    marginBottom: 12,
    textAlign: 'center',
  },
  btnClear: {
    backgroundColor: colors.negative.dark,
    marginBottom: 16,
    borderColor: colors.negative.dark,
  },
});

export default AddNewScreen;
