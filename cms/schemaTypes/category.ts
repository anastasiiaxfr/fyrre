import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Post Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    })
  ],
 preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },

    prepare({title, slug}) {
      return {
        title:
          slug

      }
    },
  },
})
