import { RiUserAddLine } from "react-icons/ri"
const parent = "/authors"

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: RiUserAddLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'We recommend clicking generate. Changing URL after publishing may cause broken pages',
      options: {
        source: "name",
        slugify: (input) =>
        input.toLowerCase()
        .replace(/\s+/g, "-").slice(0, 200)
        //Remove special characters
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Alt Tag',
      name: 'alt_tag',
      type: 'string',
      description: 'Describe your image',
      validation: Rule => Rule.required().warning('Describing images will help with ADA compliance and SEO')
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
