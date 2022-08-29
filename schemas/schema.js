// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';
import article from './article';
import articleCategories from './articleCategories';
import homepage from './homepage';
import instructors from './instructors';
import infoPages from './infoPages';
import contactData from './contactData';
import preschoolers from './preschoolers';
import motivation from './motivation';
import galeries from './galeries';
import sections from './sections';
import groupSchedule from './groupSchedule';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    article,
    articleCategories,
    homepage,
    instructors,
    infoPages,
    contactData,
    preschoolers,
    motivation,
    galeries,
    sections,
    groupSchedule
  ])
});
