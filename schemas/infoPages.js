import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'infoPages',
  title: 'Strony informacyjne',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoDesc',
      type: 'string',
      title: 'Opis SEO',
      desription:
        'SEO description should describe article for Google Web Search Engine.',
      validation: (Rule) =>
        Rule.max(250).warning(
          "SEO description shouldn't be more than 250 characters."
        ),
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoKeyWords',
      title: 'SEO Key words',
      type: 'array',
      description: 'Key words for an article for Google Web Search Engine.',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.max(50).warning(
              "A single key word shouldn't be more than 50 characters."
            )
        }
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.unique()
    },
    {
      name: 'content',
      title: 'Zawartość strony',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
