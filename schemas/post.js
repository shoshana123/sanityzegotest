import category from './category'
import tag from './tag'

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'string',
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [category],
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [tag],
      }
    ],
  }
