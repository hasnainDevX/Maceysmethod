export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image URL',
      type: 'url'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}