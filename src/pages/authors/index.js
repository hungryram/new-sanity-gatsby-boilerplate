import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function AuthorIndex({ data }) {
    const sanity = data.allSanityAuthor
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        {sanity.nodes.map((pages) => {
                            return (
                                <Link key={pages.id} to={pages.slug.current}>{pages.name}</Link>
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
    allSanityAuthor {
      nodes {
        name
        slug {
          current
        }
        id
      }
    }
  }
  
`