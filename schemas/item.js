export default {
  name: 'item',
  title: 'Item',
  type: 'object',
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
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'monthlyPrice',
      title: 'Monthly Price',
      type: 'number',
    },
    {
      name: 'annualPrice',
      title: 'Annual Price',
      type: 'number',
    },
    {
      name: 'itemsPerRow',
      title: 'Items Per Row',
      type: 'number',
    },
  ],
};
