import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'sections',
  title: 'Nasze sekcje',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'name',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'label',
      title: 'Label (do paska wyboru)',
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
      name: 'description',
      title: 'Opis grupy',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'address',
      title: 'Adres',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'googleMapsLink',
      title: 'Link do Google Maps',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'days',
      title: 'Dni zajęć',
      description:
        'Podane dni będą nazwami kolkumn w tabeli harmonogramu na stronie sekcji.',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'scheduleRows',
      title: 'Wiersze harmonogramu',
      type: 'array',
      of: [
        {
          type: 'groupSchedule',
          name: 'groupName',
          title: 'Harmonogram grupy',
          validation: (Rule) => Rule.required()
        }
      ],
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
