export default {
  name: 'groupSchedule',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'groupName',
      title: 'Nazwa grupy',
      validation: (Rule) => Rule.required()
    },
    {
      type: 'string',
      name: 'hours',
      title: 'Godziny zajęć',
      description: `Wypisz po średnikach godziny zajęć w poszczególnych dniach. 
      UWAGA! Kolejność godzin i podanych wcześniej dni zajęć musi się zgadzać. Jeśli w dany dzień nie ma zajęć - wpisz ;-;
      PRZYKŁAD: 17:00 - 18:00;17:15 - 18:15`,
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'groupName'
    }
  }
};
