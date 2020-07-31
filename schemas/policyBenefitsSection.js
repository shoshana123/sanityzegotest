import items from './items';

export default {
  name: 'policyBenefitsSection',
  title: 'Policy Benefits Section',
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
