export default {
    title: 'Main Colors',
    name: 'mainColors',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
    },
    fields: [
        {
            title: 'Primary Color',
            name: 'primaryColor',
            type: 'color',
        },
        {
            title: 'Secondary Color',
            name: 'secondaryColor',
            type: 'color'
        },
        {
            title: 'Button Background Color',
            name: 'buttonBackgroundColor',
            type: 'color'
        },
        {
            title: 'Button Text Color',
            name: 'buttonTextColor',
            type: 'color'
        }
    ]
}