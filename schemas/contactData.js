import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'contactData',
  title: 'Dane Kontaktowe',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'phone',
      title: 'Numer Kontaktowy',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'email',
      title: 'Adres e-mail',
      type: 'string',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Dane kontaktowe'
      };
    }
  }
};
