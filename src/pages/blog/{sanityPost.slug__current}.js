import { PortableText } from "@portabletext/react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function Posts({ data }) {
    const sanity = data.sanityPost
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <GatsbyImage
                            image={sanity.mainImage.asset.gatsbyImageData}
                            alt={sanity.alt_tag}
                            className="my-10"
                        />
                        <PortableText
                            value={sanity._rawBody}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    sanityPost {
      title
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawBody
      alt_tag
    }
  }
  
`