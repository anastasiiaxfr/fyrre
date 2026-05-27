import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'podcast',
  title: 'Podcast',
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
      name: 'translationGroup',
      title: 'Translation Group',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Same value for all locales of same post',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Maximum 300 characters',
      validation: (Rule) => Rule.min(1).max(300),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'number',
      description: 'Duration in minutes',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'episod',
      title: 'Episod',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'listen',
      title: 'Listen On',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'network',
              title: 'Network',
              type: 'string',
              validation: (Rule) => Rule.min(1).max(50),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
