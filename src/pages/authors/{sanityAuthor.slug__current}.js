import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function Author({ data }) {
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    sanityAuthor {
      _rawBio
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      name
    }
  }
`