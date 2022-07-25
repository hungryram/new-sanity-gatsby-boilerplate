import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function BlogIndex({ data }) {

    const sanity = data.allSanityPost

    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        {sanity.nodes.map((pages) => {
                            return (
                                <Link to={"/blog/" + pages.slug.current}>{pages.title}</Link>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityPost {
      nodes {
        slug {
          current
        }
        title
      }
    }
  }
  
`