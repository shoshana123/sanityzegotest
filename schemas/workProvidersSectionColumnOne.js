export default {
  name: 'workProvidersSectionColumnOne',
  title: 'Work Providers Section Column One',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
