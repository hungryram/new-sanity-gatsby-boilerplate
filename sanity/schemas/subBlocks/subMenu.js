//File name: link.js
//File location: schemas/objects

export default {
    name: 'subMenu',
    type: 'object',
    title: 'Link',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            name: "text",
            type: "string",
            title: "Navigation Text",
            validation: Rule => Rule.required().error('Name your menu item'),
          },
          {
            title: "Select the type of link",
            name: "linkType",
            type: "string",
            options: {
                list: [
                    { title: "Internal", value: "internal" },
                    { title: "External", value: "external" },
                ],
                layout: "radio",
            },
        },
        {
            title: 'Website Link',
            name: 'internalLink',
            description: 'Select pages for navigation',
            type: 'reference',
            hidden: ({ parent }) => parent?.linkType !== "internal",
            to: [{ type: 'post' }, { type: 'legal' }, {type: 'author'}],
        },
        {
            name: 'externalUrl',
            title: 'External URL',
            description: "Use this field to link to an external website",
            hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
            type: 'url',
        },
    ]
  };