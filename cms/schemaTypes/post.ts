import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Ukraine', value: 'ua'},
        ],
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'translationGroup',
      title: 'Translation Group',
      type: 'string',
      //hidden: true,
      validation: (Rule) => Rule.required(),
      description: 'Same name for all locales unique between post',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Maximum 300 characters',
      validation: (Rule) => Rule.min(1).max(300),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      weak: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'number',
      description: 'Duration in minutes',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
