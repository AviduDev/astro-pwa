export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'liveWebsite',
      title: 'Live Website',
      type: 'string',
      description: 'Paste URL here',
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'string',
      description: 'Paste URL here',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      description: 'Finished | Ongoing | Maintain',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'mainImage',
      tags: 'categories',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
