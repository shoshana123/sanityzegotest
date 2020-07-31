import columns from './columns';

export default {
  name: 'rowData',
  title: 'Rows Data',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'descriptionNote',
      title: 'Description Note',
      type: 'string',
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [columns],
    },
  ],
};
