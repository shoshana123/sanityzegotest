import rowData from './rowData';
import tableHeader from './tableHeader';

export default {
  name: 'comparisonTableSection',
  title: 'Comparison Table Section',
  type: 'document',
  fields: [
    {
      name: 'desktopTitle',
      title: 'Desktop Title',
      type: 'string',
    },
    {
      name: 'mobileTitle',
      title: 'Mobile Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'tableHeaders',
      title: 'Table Headers',
      type: 'array',
      of: [tableHeader],
    },
    {
      name: 'rowData',
      title: 'Rows Data',
      type: 'array',
      of: [rowData],
    },
  ],
};
