import { MdOutlineArticle } from "react-icons/md"

const parent = "/legal"


export default {
    title: 'Pages',
    name: 'pages',
    type: 'document',
    icons: MdOutlineArticle,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'URL',
            name: 'slug',
            type: 'slug',
            description: 'We recommend clicking generate. Changing URL may cause broken pages',
            options: {
              source: "title",
              slugify: (input) =>
              input.toLowerCase()
              .replace(/\s+/g, "-").slice(0, 200)
              //Remove special characters
              .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
            validation: (Rule) => Rule.required(),
            },
        },
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo',
            validation: Rule => Rule.required().error('Required for search engines')
        }
    ]
}