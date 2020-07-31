import items from './items';

export default {
  name: 'checklistSection',
  title: 'Checklist Section',
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
    {
      name: 'listItems',
      title: 'listItems',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'footerText',
      title: 'Footer',
      type: 'string',
    },
  ],
};
