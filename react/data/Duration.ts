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

export const durationsIndex: string[] = durations.map(duration => {
  return duration.key;
});
