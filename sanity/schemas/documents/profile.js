export default {
    name: 'profileSettings',
    title: 'Profile Settings',
    type: 'document',
    fields: [
        {
            title: 'Company Name',
            name: 'company_name',
            type: 'string',
        },
        {
            title: 'Contact Information',
            name: 'contact_information',
            type: 'contact'
        },
        {
            title: 'Address',
            name: 'address',
            type: 'location'
        },
        {
            title: 'Social',
            name: 'social',
            type: 'social'
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo',
            description: 'Update your title tags and descriptions for search engines',
            validation: Rule => Rule.required().error('Needed to improve website rankings')
        }
    ]
}