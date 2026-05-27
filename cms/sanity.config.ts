import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {structure} from './structure'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'fyrre',

  projectId: process.env.VITE_SANITY_PROJECT_ID || '', // change to value, env doesn't work
  dataset: process.env.VITE_SANITY_DATASET || '', // change to value, env doesn't work

  plugins: [
    table(),
    visionTool(),
    structureTool({
      structure,
    }),
    documentInternationalization({
      supportedLanguages: [
        {id: 'ua', title: 'Ukraine'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: ['post', 'author', 'podcast'],
      languageField: `language`,
      weakReferences: true,
      bulkPublish: true,
      hideLanguageFilter: true,
    }),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'ua', title: 'Ukaraine'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
