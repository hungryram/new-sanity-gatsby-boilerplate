import { MdLocalMovies } from 'react-icons/md'

export default {
    title: 'Social',
    name: 'social',
    type: 'object',
    icon: MdLocalMovies,
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'string',
        },
        {
            title: 'Youtube',
            name: 'youtube',
            type: 'string'
        },
        {
            title: 'Facebook',
            name: 'facebook',
            type: 'string',
        },
        {
            title: 'Twitter',
            name: 'twitter',
            type: 'string',
        },
        {
            title: 'Tiktok',
            name: 'tiktok',
            type: 'string',
        },
        {
            title: 'Reddit',
            name: 'reddit',
            type: 'string',
        }
    ]
}