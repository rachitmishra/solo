import SoloButton from 'components/SoloButton';
import SoloSelectableButtonGroup from 'components/SoloSelectableButtonGroup';
import {durations, durationsIndex} from 'data/Duration';
import {Subscription} from 'data/Subscription';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from './ContainerScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from 'utils/SoloColors';
import {deleteSubscription, setSubscription} from 'data/Store';
import SoloTextTitle from 'components/SoloTextTitle';
import SoloTextInput from 'components/SoloTextInput';
import SoloButtonClose from 'components/SoloButtonClose';

type AddScreenProps = {
  route: any;
  navigation: any;
};

const AddScreen = ({route, navigation}: AddScreenProps) => {
  const {subscription} = route.params ?? {};

  const [_subscription, _setSubscription] = useState<Subscription>(
    subscription ? subscription : {},
  );

  const _getSelectedDurationIds = (): number[] => {
    return _subscription.duration
      ? [durationsIndex.indexOf(_subscription.duration)]
      : [];
  };

  const _onNameChange = (name: string) => {
    const newSubscription = _subscription;
    newSubscription.key = name;
    _setSubscription(newSubscription);
  };

  const _onAmountChange = (amount: string) => {
    const newSubscription = _subscription;
    newSubscription.value = Number(amount);
    _setSubscription(newSubscription);
  };

  const _renderDeleteButton = () => {
    return subscription ? (
      <SoloButton
        onPress={() => {
          deleteSubscription(_subscription);
          navigation.navigate('home', {reload: true});
        }}
        label={'Delete'}
        style={styles.btnDelete}
        textColor={colors.negative}
      />
    ) : (
      <View />
    );
  };
  const FormContent = () => {
    return (
      <View>
        <SoloTextTitle title="Add subscription" />
        <SoloTextInput
          hint="Netflix"
          label={'Name'}
          txt={_subscription.key ?? ''}
          onChange={(txt: string) => _onNameChange(txt)}
        />
        <SoloTextInput
          hint="₹500"
          label={'Price (₹)'}
          type="number-pad"
          txt={_subscription?.value ? _subscription?.value + '' : ''}
          onChange={(txt: string) => _onAmountChange(txt)}
        />
        <SoloSelectableButtonGroup
          label={'Duration'}
          items={durations}
          onPressed={durationKey => {
            const newSubscription = _subscription;
            newSubscription.duration = durationKey[0];
            _setSubscription(newSubscription);
          }}
          selectedIds={_getSelectedDurationIds()}
          singleSelection={true}
        />
        <SoloButton
          onPress={() => {
            setSubscription(_subscription);
            navigation.navigate('home', {reload: true});
          }}
          label={'Save'}
          style={styles.btnSave}
        />
        {_renderDeleteButton()}
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <SoloButtonClose navigation={navigation} />
        <KeyboardAwareScrollView>
          <FormContent />
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
  },
  btnClose: {
    width: 44,
    height: 32,
    color: 'white',
  },
  btnSave: {
    marginTop: 32,
  },
  btnDelete: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});

export default AddScreen;
