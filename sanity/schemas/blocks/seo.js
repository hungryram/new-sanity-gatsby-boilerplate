export default {
    name: 'seo',
    title: 'Search Engine Optimization',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Title Tag',
            name: 'title_tag',
            type: 'string'
        },
        {
            title: 'Meta Description',
            name: 'meta_description',
            type: 'text'
        }
    ]
}