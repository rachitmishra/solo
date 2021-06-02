export type Keyed = {
  key: string;
  readable?: string;
};

export type Tag = Keyed & {
  color?: string;
};

export const tags: Tag[] = [
  {
    key: 'video',
  },
  {
    key: 'music',
  },
  {
    key: 'grocery',
  },
  {
    key: 'gaming',
  },
  {
    key: 'website',
  },
  {
    key: 'travel',
  },
  {
    key: 'storage',
  },
  {
    key: 'hobby',
  },
  {
    key: 'education',
  },
  {
    key: 'family',
  },
  {
    key: 'other',
  },
];

export const tagsIndex: string[] = tags.map(tag => {
  return tag.key;
});
