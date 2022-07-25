import * as React from "react";
import { Helmet } from "react-helmet";

export default function Seo({ title, description, schemaMarkup }) {

  const titleTag = title;
  const metaDescription = description;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content: titleTag,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:title',
          content: titleTag,
        },
        {
          name: 'twitter:image',
          content: '',
        },
        {
          name: 'twitter:creator',
          content: ''
        },
      ]}
    >
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
    </Helmet>
  )
}