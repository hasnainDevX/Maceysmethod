export default {
  name: 'packages',
  title: 'Packages',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Social Media', value: 'social'},
          {title: 'Administrative', value: 'admin'},
          {title: 'Hybrid', value: 'hybrid'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required()},
    {name: 'price', title: 'Price', type: 'string', validation: Rule => Rule.required()},
    {name: 'duration', title: 'Duration', type: 'string'},
    {name: 'hours', title: 'Hours', type: 'string'},
    {name: 'weekly', title: 'Weekly Hours', type: 'string'},
    {name: 'note', title: 'Note', type: 'string'},
    {name: 'popular', title: 'Popular', type: 'boolean', initialValue: false},
    {name: 'gradient', title: 'Gradient', type: 'string'},
    {name: 'img', title: 'Image URL', type: 'url'},
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{type: 'string'}]
      
    }
  ]
}