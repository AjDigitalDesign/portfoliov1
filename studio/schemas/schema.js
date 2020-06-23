// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

//Object
import link from "./object/link";
import Hero from "./object/Hero";
import homeAbout from "./object/homeAbout";
import portableText from "./object/portableText";


//Pages
import homepage from "./pages/homepage";

//Document
import siteConfig from "./siteConfig";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteConfig,
    Hero,
    link,
    homeAbout,
    portableText,
    homepage,
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
})
