import {Keyed} from './Tag';

export type Duration = Keyed & {
  value: number;
};

export const durationIndices: Map<string, Duration> = new Map([
  [
    'month',
    {
      key: 'month',
      readable: 'Monthly',
      value: 1,
    },
  ],
  [
    'quarter',
    {
      key: 'quarter',
      readable: 'Quaterly',
      value: 3,
    },
  ],
  [
    'halfyear',
    {
      key: 'halfyear',
      readable: 'Half yearly',
      value: 6,
    },
  ],
  [
    'year',
    {
      key: 'year',
      readable: 'Yearly',
      value: 12,
    },
  ],
]);

const getDurations = () => {
  const _durations: Duration[] = [];
  for (let [, value] of durationIndices) {
    _durations.push(value);
  }
  return _durations;
};

export const durations = getDurations();
