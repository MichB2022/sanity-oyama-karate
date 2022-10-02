import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'homepage',
  title: 'Strona Główna',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'text',
      title: 'Tekst główny',
      type: 'string',
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
      name: 'phone',
      title: 'Numer Kontaktowy',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'kidsImage',
      title: 'Zdjęcie grupy dzieci',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'teenagersImage',
      title: 'Zdjęcie grupy młodziezy',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'adultsImage',
      title: 'Zdjęcie grupy dorosłych',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'familyImage',
      title: 'Zdjęcie grupy rodziny',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Strona Główna'
      };
    }
  }
};
