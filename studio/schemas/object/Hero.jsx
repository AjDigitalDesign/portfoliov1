export default {
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
        {
            name: "image",
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "subtitle",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'description',
            type: 'string',
        },
        {
            name: "navItemUrl",
            type: "link", // references link object
            title: "Nav Item URL"
        }
    ]
};