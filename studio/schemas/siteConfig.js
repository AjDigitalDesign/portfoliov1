export default {
    name: 'site-config',
    type: 'document',
    title: 'Site Configuration',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Site title'
        },
        {
            title: 'Brand Logo',
            name: 'logo',
            type: 'image',
            options: { collapsible: true, collapsed: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'alternative text',
                    options: {
                        isHighlighted: true,
                    }
                }

            ]
        }
    ]
}