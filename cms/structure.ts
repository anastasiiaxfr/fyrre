import type { StructureResolver } from 'sanity/structure'

const languageSection = (
  S: any,
  type: string,
  title: string
) =>
  S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          S.listItem()
            .title('EN')
            .child(
              S.documentTypeList(type)
                .title(`EN ${title}`)
                .filter('_type == $type && language == $language')
                .params({
                  type,
                  language: 'en',
                })
            ),

          S.listItem()
            .title('UA')
            .child(
              S.documentTypeList(type)
                .title(`UA ${title}`)
                .filter('_type == $type && language == $language')
                .params({
                  type,
                  language: 'ua',
                })
            ),
        ])
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      languageSection(S, 'post', 'Posts'),

      languageSection(S, 'podcast', 'Podcasts'),

      languageSection(S, 'author', 'Authors'),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['post', 'podcast', 'author'].includes(listItem.getId()!)
      ),
    ])