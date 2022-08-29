import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'instructors',
  title: 'Instruktorzy',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'name',
      title: 'Imię i nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'degree',
      title: 'Stopień',
      type: 'string',
      validation: (Rule) => Rule.required()
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
      name: 'content',
      title: 'Opis instruktora',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'shortenDesc',
      title: 'Skrócony opis instruktora',
      type: 'text',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
