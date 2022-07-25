import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { useState, useRef } from "react";
import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4"
import { IconContext } from "@react-icons/all-files";
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import { BiCaretDown } from "@react-icons/all-files/bi/BiCaretDown"

export default function Navbar() {

  const [active, setActive] = useState(null);

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
                text
                submenuChild {
                  text
                  internalLink {
                    ... on SanityAuthor {
                      id
                      name
                      slug {
                        current
                      }
                      _type
                    }
                    ... on SanityLegal {
                      id
                      title
                      slug {
                        current
                      }
                      _type
                    }
                    ... on SanityPost {
                      id
                      title
                      slug {
                        current
                      }
                      _type
                    }
                  }
                  externalUrl
                  _type
                }
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
              {data.sanityAppearances.header?.mainNav.items.map((link, i) => {
                if (link.submenuChild.length > 0) {
                  return (
                    <>
                      <li className="relative inline-block mx-2" onClick={active === link ? () => setActive(null) : () => setActive(link)}>
                        <Link
                          aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                          target={link?.externalUrl && "_blank"}
                          key={i}
                          className="cursor-pointer flex flex-row items-center"               
                        >
                          {link.internalLink?.name ?? link.internalLink?.title ?? link.text} <BiCaretDown className={`ml-1 text-lg ${active === link ? "rotate-180" : "rotate-0"}`} />
                        </Link>

                          <ul className={`absolute -bottom-2 left-0 translate-y-full bg-white p-2 border text-left w-fit ${active === link ? "visible" : "hidden"}`}>
                            {link.submenuChild.map((sub) => {
                              return (
                                <>
                                  <li className="whitespace-nowrap">
                                    <Link
                                    onClick={() => setActive(null)}
                                      to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                      aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                      target={sub?.externalUrl && "_blank"}
                                    >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                  </li>
                                </>
                              )
                            })}
                          </ul>
                      </li>
                    </>
                  )
                }
                else {
                  return (
                    <>
                      <Link
                        className="mx-2 inline-block"
                        to={(link.internalLink?._type === "post" && `/blog/${link.internalLink.slug.current}`) || (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug.current}`) || (link.internalLink?._type === "author" && `/authors/${link.internalLink.slug.current}`) || (link.externalUrl && `${link.externalUrl}`)}
                        aria-label={link.internalLink?.name ?? link.internalLink?.title ?? link.text}
                        target={link?.externalUrl && "_blank"}
                      >
                        {link.internalLink?.name ?? link.internalLink?.title ?? link.text}

                      </Link>
                    </>
                  )
                }
              })}
            </ul>
          </nav>

          <div className="z-50 relative md:hidden">
            <div className="nav p-4">
              <div className="flex items-center">
                <div className="flex-1">
                  <Link to="/">
                  {data.sanityAppearances.branding.logo?.asset.url ?
                  <img src={data.sanityAppearances.branding.logo.asset.url} width={data.sanityAppearances.branding.logoWidth} alt={data.sanityProfileSettings?.company_name} />
                  :
                  <h2 className="text-2xl">{data.sanityProfileSettings?.company_name}</h2>
                }
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
                {data.sanityAppearances.header?.mainNav.items.map((links, i) => {
                if (links.submenuChild?.[0]) {
                  return (
                    <>
                      <li className="inline-block mx-2" onClick={() => setActive(!active)}>
                        <Link
                          aria-label={links.internalLink?.name ?? links.internalLink?.title ?? links.text}
                          target={links?.externalUrl && "_blank"}
                          key={i}
                          className="cursor-pointer"
                          
                        >
                          {links.internalLink?.name ?? links.internalLink?.title ?? links.text} &#9660;
                        </Link>

                          <ul className={active ? "hidden" : "visible"}>
                            {links.submenuChild.map((sub) => {
                              return (
                                <>
                                  <li className="block">
                                    <Link
                                      to={(sub.internalLink?._type === "post" && `/blog/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "legal" && `/legal/${sub.internalLink.slug.current}`) || (sub.internalLink?._type === "author" && `/authors/${sub.internalLink.slug.current}`) || (sub.externalUrl && `${sub.externalUrl}`)}
                                      aria-label={sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}
                                      target={sub?.externalUrl && "_blank"}
                                    >{sub.internalLink?.name ?? sub.internalLink?.title ?? sub.text}</Link>
                                  </li>
                                </>
                              )
                            })}
                          </ul>
                      </li>
                    </>
                  )
                }
                else {
                  return (
                    <>
                      <Link
                        className="mx-2 block"
                        to={(links.internalLink?._type === "post" && `/blog/${links.internalLink.slug.current}`) || (links.internalLink?._type === "legal" && `/legal/${links.internalLink.slug.current}`) || (links.internalLink?._type === "author" && `/authors/${links.internalLink.slug.current}`) || (links.externalUrl && `${links.externalUrl}`)}
                        aria-label={links.internalLink?.name ?? links.internalLink?.title ?? links.text}
                        target={links?.externalUrl && "_blank"}
                      >
                        {links.internalLink?.name ?? links.internalLink?.title ?? links.text}

                      </Link>
                    </>
                  )
                }
              })}
                </ul>
              </div>
            </div>
          </div>

        </>
      )}
    />
  )
}