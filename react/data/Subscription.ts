import {Keyed, Tag} from './Tag';

export type Subscription = Keyed & {
  value: number;
  currency: string;
  duration: string;
  tags: Tag[];
  color?: string;
  paidBy?: string;
  createdOn?: string;
};

export const defaultSubscriptions: Subscription[] = [
  {
    key: 'Netflix',
    value: 200,
    currency: 'inr',
    duration: 'month',
    tags: [{key: 'video', color: 'darkred'}],
  },
  {
    key: 'Hotstar',
    value: 1499,
    currency: 'inr',
    duration: 'year',
    tags: [{key: 'video', color: 'green'}],
  },
  {
    key: 'Spotify',
    value: 1899,
    currency: 'inr',
    duration: 'year',
    tags: [{key: 'music', color: 'green'}],
  },
  {
    key: 'SonyLiv',
    value: 300,
    currency: 'inr',
    duration: 'month',
    tags: [{key: 'video', color: 'purple'}],
  },
  {
    key: 'rachitmishra.com',
    value: 1000,
    currency: 'inr',
    duration: 'year',
    tags: [{key: 'website', color: 'darkred'}],
  },
  {
    key: 'sharanyamishra.com',
    value: 1000,
    currency: 'inr',
    duration: 'year',
    tags: [{key: 'Video', color: 'green'}],
  },
  {
    key: 'BigBasket',
    duration: 'quarter',
    value: 300,
    currency: 'inr',
    tags: [{key: 'grocery', color: 'green'}],
  },
  {
    key: 'Playstation Plus',
    duration: 'year',
    value: 3200,
    currency: 'inr',
    tags: [{key: 'gaming', color: 'blue'}],
  },
  {
    key: 'iCloud',
    duration: 'month',
    value: 212,
    currency: 'inr',
    tags: [{key: 'storage', color: 'grey'}],
  },
  {
    key: 'Google one',
    duration: 'year',
    value: 1300,
    currency: 'inr',
    tags: [{key: 'storage', color: 'orange'}],
  },
];
export {};
