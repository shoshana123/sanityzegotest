import items from './items';

export default {
  name: 'policyOptionsSection',
  title: 'Policy Options Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    items,
  ],
};
