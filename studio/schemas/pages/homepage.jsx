export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'hero',
            type: 'hero',
            options: {
                collapsible: true,
                collapsed: true
            }
        },
        {
            name: 'homeabout',
            type: 'homeabout',
            options: {
                collapsible: true,
                collapsed: true
            }
        }
    ]
}