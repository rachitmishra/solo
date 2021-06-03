import React from 'react';
import SoloButton from './SoloButton';
import SoloButtonNeomorph from './SoloButtonNeomorph';

type SoloButtonAddSubscriptionProps = {
  navigation: any;
};
const SoloButtonAddSubscription = ({
  navigation,
}: SoloButtonAddSubscriptionProps) => {
  return (
    <SoloButtonNeomorph buttonWidth={180}>
      <SoloButton
        onPress={() => navigation.navigate('add')}
        label={'+ Add Subscription'}
      />
    </SoloButtonNeomorph>
  );
};

export default SoloButtonAddSubscription;
