import checklistSection from './checklistSection';
import columns from './columns';
import comparisonTableSection from './comparisonTableSection';
import faqsSection from './faqsSection';
import heroSection from './heroSection';
import item from './item';
import items from './items';
import policyBenefitsSection from './policyBenefitsSection';
import policyOptionsSection from './policyOptionsSection';
import pricingSection from './pricingSection';
import rowData from './rowData';
import tableHeader from './tableHeader';
import widgetSection from './widgetSection';
import workProvidersSectionColumnOne from './workProvidersSectionColumnOne';
import workProvidersSectionColumnTwo from './workProvidersSectionColumnTwo';

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import bannerSection from './bannerSection';
import videoSection from './videoSection';
import author from './author';
import post from './post';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'productTemplate',
      title: 'Product Template',
      type: 'document',
      fields: [
        {
          name: 'bannerSection',
          type: 'reference',
          to: [{ type: 'bannerSection' }],
        },
        {
          name: 'videoSection',
          type: 'reference',
          to: [{ type: 'videoSection' }],
        },
        {
          name: 'heroSection',
          type: 'reference',
          to: [{ type: 'heroSection' }],
        },
        {
          name: 'policyBenefitsSection',
          type: 'reference',
          to: [{ type: 'policyBenefitsSection' }],
        },
        {
          name: 'comparisonTableSection',
          type: 'reference',
          to: [{ type: 'comparisonTableSection' }],
        },
        {
          name: 'policyOptionsSection',
          type: 'reference',
          to: [{ type: 'policyOptionsSection' }],
        },
        {
          name: 'checklistSection',
          type: 'reference',
          to: [{ type: 'checklistSection' }],
        },
        {
          name: 'workProvidersSectionColumnOne',
          type: 'reference',
          to: [{ type: 'workProvidersSectionColumnOne' }],
        },
        {
          name: 'workProvidersSectionColumnTwo',
          type: 'reference',
          to: [{ type: 'workProvidersSectionColumnTwo' }],
        },
        {
          name: 'pricingSection',
          type: 'reference',
          to: [{ type: 'pricingSection' }],
        },
        {
          name: 'widgetSection',
          type: 'reference',
          to: [{ type: 'widgetSection' }],
        },
        {
          name: 'faqsSection',
          type: 'reference',
          to: [{ type: 'faqsSection' }],
        },
      ],
    },
    bannerSection,
    videoSection,
    heroSection,
    policyBenefitsSection,
    comparisonTableSection,
    tableHeader,
    policyOptionsSection,
    workProvidersSectionColumnOne,
    workProvidersSectionColumnTwo,
    pricingSection,
    checklistSection,
    widgetSection,
    faqsSection,
    items,
    item,
    rowData,
    columns,
    author,
    post,
  ]),
});
