import { PortableText } from "@portabletext/react"
import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"

export default function Pages({ data }) {
    const sanity = data.sanityPages
    return (
        <>
        <Layout>
            <Seo
                title={sanity.seo.title_tag}
                description={sanity.seo.meta_description}
            />
            <div className="section">
                <div className="container content">
                    <PortableText
                        value={sanity._rawContent}
                    />
                </div>
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
query ($id: String) {
    sanityPages(id: {eq: $id}) {
      _rawContent
      seo {
        meta_description
        title_tag
      }
      title
    }
  }
`