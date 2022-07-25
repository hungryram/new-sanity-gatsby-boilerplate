export default {
    name: 'branding',
    title: 'Branding',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Logo',
            name: 'logo',
            type: 'image'
        },
        {   
            title: 'Logo Width',
            name: 'logoWidth',
            type: 'number'
        },
        {
            title: 'Favicon',
            name: 'favicon',
            type: 'image'
        }
    ]
}