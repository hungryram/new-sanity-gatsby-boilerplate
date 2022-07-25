import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4"
import { IconContext } from "@react-icons/all-files";
import { GrClose } from "@react-icons/all-files/gr/GrClose"

export default function Navbar() {
  const [active, setActive] = useState(true);
  return (
    <StaticQuery
      query={graphql`
            {
                sanityAppearances {
                  header {
                    mainNav {
                      items {
                        internalLink {
                          ... on SanityPost {
                            id
                            slug {
                              current
                            }
                            title
                            _type
                          }
                          ... on SanityLegal {
                            id
                            slug {
                              current
                            }
                            title
                            _type
                          }
                          ... on SanityAuthor {
                            id
                            name
                            slug {
                              current
                            }
                            _type
                          }
                        }
                        externalUrl
                      }
                    }
                  }
                  branding {
                    logo {
                      asset {
                        url
                      }
                    }
                    favicon {
                      asset {
                        url
                      }
                    }
                    logoWidth
                  }
                }
                sanityProfileSettings {
                  company_name
                }
              }
              
            `
      }
      render={data => (
        <>
          <nav className="md:flex items-center justify-center py-5 md:px-10 md:visible hidden" style={{ borderBottom: '1px solid #eee' }}>
            <div className="flex-1">
              <Link to="/">
                {data.sanityAppearances.branding.logo?.asset.url ?
                  <img src={data.sanityAppearances.branding.logo.asset.url} width={data.sanityAppearances.branding.logoWidth} alt={data.sanityProfileSettings?.company_name} />
                  :
                  <h2 className="text-2xl">{data.sanityProfileSettings?.company_name}</h2>
                }
              </Link>
            </div>
            <ul className="flex-2 items-center text-right">
              {data.sanityAppearances.header?.mainNav.items.map((links) => {
                return (
                  <>
                    <Link
                      className="mx-2"
                      to={(links.internalLink._type === "post" && `/blog/${links.internalLink.slug.current}`) || (links.internalLink._type === "legal" && `/legal/${links.internalLink.slug.current}`) || (links.internalLink._type === "author" && `/authors/${links.internalLink.slug.current}`)}
                    >
                      {links.internalLink?.name ?? links.internalLink?.title}
                    </Link>
                  </>
                )
              })}
            </ul>
          </nav>

          <div className="z-50 relative md:hidden">
            <div className="nav p-4">
              <div className="flex items-center">
                <div className="flex-1">
                  <Link to="/">

                  </Link>
                </div>
                <div className="flex-1 text-right">
                  <div id="toggle" className="cursor-pointer flex justify-end" onClick={() => setActive(!active)}>
                    {active ?
                      <IconContext.Provider value={{
                        size: '30px'
                      }}>
                        <HiOutlineMenuAlt4 />
                      </IconContext.Provider>
                      :
                      <IconContext.Provider value={{
                        size: '20px'
                      }}>
                        <GrClose />
                      </IconContext.Provider>
                    }
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className={active ? "hidden" : "visible"}>
                <ul style={{ listStyle: "none", padding: "0" }} className="mt-5">

                </ul>
              </div>
            </div>
          </div>

        </>
      )}
    />
  )
}