import items from './items';

export default {
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    items,
  ],
};
