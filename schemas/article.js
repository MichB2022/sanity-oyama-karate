import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'articles',
  title: 'Artykuły',
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
      name: 'tags',
      title: 'Tagi w artykule',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.max(50).warning(
              "A single tag shouldn't be more than 50 characters."
            )
        }
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.unique()
    },
    {
      name: 'articleCategory',
      title: 'Kategoria',
      type: 'reference',
      to: { type: 'articleCategories' },
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
      name: 'mainImage',
      title: 'Główne zdjęcie',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'mainImageAlt',
      title: 'Alternatywny tekst dla zdjęcia',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'shortenDesc',
      title: 'Skrócony opis',
      type: 'text',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Treść artykułu',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Data publikacji',
      type: 'date',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'mainImage'
    },
    prepare(selection) {
      const { date } = selection;
      return Object.assign({}, selection, {
        subtitle: date && `data publikacji: ${date}`
      });
    }
  }
};
