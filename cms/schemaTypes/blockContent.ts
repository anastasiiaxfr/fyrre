import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',

  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',

      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Blockquote', value: 'blockquote'},
        {title: 'Citation', value: 'cite'},
      ],

      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],

      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Code', value: 'code'},
          {title: 'Strike', value: 'strike-through'},
        ],

        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',

            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },

              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),

    // Image
    defineArrayMember({
      type: 'image',

      options: {
        hotspot: true,
      },

      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },

        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),

    // Table
    defineArrayMember({
      title: 'Table',
      name: 'table',
      type: 'table',
    }),
  ],
})

