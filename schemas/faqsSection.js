import item from './item';

export default {
  name: 'faqsSection',
  title: 'Faqs Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'listData',
      title: 'List Data',
      type: 'array',
      of: [item],
    },
    {
      name: 'firstPartFooter',
      title: 'First Part of Fooer',
      type: 'string',
    },
    {
      name: 'footerLinkText',
      title: 'Footer Link Text',
      type: 'string',
    },
    {
      name: 'lastPartFooter',
      title: 'Last Part of Footer',
      type: 'string',
    },
  ],
};
