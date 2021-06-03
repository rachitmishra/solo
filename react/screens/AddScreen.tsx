import SoloButton from 'components/SoloButton';
import SoloSelectableButtonGroup from 'components/SoloSelectableButtonGroup';
import {durationKeys, durations} from 'data/Duration';
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
import SoloButtonNeomorph from 'components/SoloButtonNeomorph';
import Center from 'components/Center';

type AddScreenProps = {
  route: any;
  navigation: any;
};

const AddScreen = ({route, navigation}: AddScreenProps) => {
  const {subscription} = route.params ?? {};

  const [_subscription, _setSubscription] = useState<Subscription>(
    subscription ? subscription : {},
  );

  const _getSelectedDuration = (): number[] => {
    const _duration = durationKeys.get(_subscription.duration) ?? -1;
    return _duration !== -1 ? [_duration] : [];
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
        label={'Delete Subscription'}
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
        <View style={styles.formContainer}>
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
        </View>
        <View>
          <SoloSelectableButtonGroup
            label={'Duration'}
            items={durations}
            onPressed={durationKey => {
              const newSubscription = _subscription;
              newSubscription.duration = durationKey[0];
              _setSubscription(newSubscription);
            }}
            selectedIds={_getSelectedDuration()}
            singleSelection={true}
          />
          <Center style={styles.btnSave}>
            <SoloButtonNeomorph>
              <SoloButton
                onPress={() => {
                  setSubscription(_subscription);
                  navigation.navigate('home', {reload: true});
                }}
                label={'Save'}
              />
            </SoloButtonNeomorph>
          </Center>
          {_renderDeleteButton()}
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.btnClose}>
          <SoloButtonClose navigation={navigation} />
        </View>
        <KeyboardAwareScrollView>
          <FormContent />
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  formContainer: {
    margin: 16,
  },
  btnClose: {
    marginStart: 12,
    marginTop: 16,
  },
  btnSave: {
    marginTop: 24,
    marginBottom: 36,
  },
  btnDelete: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: -16,
  },
});

export default AddScreen;
