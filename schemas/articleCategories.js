import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'articleCategories',
  title: 'Kategorie Artykułów',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};