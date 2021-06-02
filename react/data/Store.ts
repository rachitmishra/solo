import {NativeModules} from 'react-native';
import {Subscription} from './Subscription';
const soloMMKV = NativeModules.SoloMMKVModule;

export const getSubscriptions = async (): Promise<Subscription[]> => {
  try {
    const result = await soloMMKV.getStrings('_sub_');
    return result.map((subscription: string) => {
      return JSON.parse(subscription);
    });
  } catch (error) {
    return [];
  }
};

export const getDuration = (): string => {
  if (__DEV__) {
    return 'debug';
  }
  return soloMMKV.getString('duration');
};

export const setDuration = (duration: string) => {
  soloMMKV.setString('duration', duration);
};

export const getName = (): string => {
  if (__DEV__) {
    return 'debug';
  }
  return soloMMKV.getString('name');
};

export const setName = (name: string) => {
  soloMMKV.setString('name', name);
};

export const getSubscription = (key: string): Subscription => {
  return JSON.parse(soloMMKV.getString(key));
};

const buildKey = (key: string) => {
  return key
    .split('')
    .filter(lttr =>
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .includes(lttr),
    )
    .join('');
};

export const setSubscription = (subscription: Subscription) => {
  const key = buildKey(subscription.key);
  soloMMKV.setString(`_sub_${key}`, JSON.stringify(subscription));
};

export const deleteSubscription = (subscription: Subscription) => {
  const key = buildKey(subscription.key);
  soloMMKV.removeKey(`_sub_${key}`);
};

export const clear = () => {
  soloMMKV.clearAll();
};
