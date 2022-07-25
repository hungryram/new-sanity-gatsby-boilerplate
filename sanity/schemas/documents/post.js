import { MdOutlinePostAdd } from "react-icons/md"
const parent = "/blog"

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdOutlinePostAdd,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'We recommend clicking generate. Changing URL after publishing may cause broken pages',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Alt Tag',
      name: 'alt_tag',
      type: 'string',
      description: 'Describe your main image',
      validation: Rule => Rule.required().warning('Describing images will help with ADA compliance and SEO')
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
