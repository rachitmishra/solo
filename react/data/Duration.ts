import {Keyed} from './Tag';

export type Duration = Keyed & {
  value: number;
};

export const durations: Duration[] = [
  {
    key: 'month',
    readable: 'Monthly',
    value: 1,
  },

  {
    key: 'quarter',
    readable: 'Quaterly',
    value: 3,
  },

  {
    key: 'halfyear',
    readable: 'Half yearly',
    value: 6,
  },
  {
    key: 'year',
    readable: 'Yearly',
    value: 12,
  },
];

const getDurationKeys = () => {
  const _durationKeys: Map<String, number> = new Map();
  durations.forEach((value: Duration, index: number) => {
    _durationKeys.set(value.key, index);
  });
  return _durationKeys;
};

export const durationKeys: Map<String, number> = getDurationKeys();

export const getDurationByKey = (key: string) => {
  const _durationIndex = durationKeys.get(key) ?? -1;
  return _durationIndex !== -1 ? durations[_durationIndex] : undefined;
};
