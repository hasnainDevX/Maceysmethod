export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'object',
      fields: [
        {
          name: 'viewBox',
          title: 'ViewBox',
          type: 'string',
          description: 'SVG viewBox attribute (e.g., "0 0 24 24")',
          validation: Rule => Rule.required(),
          initialValue: '0 0 24 24'
        },
        {
          name: 'paths',
          title: 'SVG Paths',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'd',
                  title: 'Path Data (d attribute)',
                  type: 'text',
                  description: 'The SVG path data',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'strokeLinecap',
                  title: 'Stroke Linecap',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Round', value: 'round' },
                      { title: 'Butt', value: 'butt' },
                      { title: 'Square', value: 'square' }
                    ]
                  }
                },
                {
                  name: 'strokeLinejoin',
                  title: 'Stroke Linejoin',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Round', value: 'round' },
                      { title: 'Miter', value: 'miter' },
                      { title: 'Bevel', value: 'bevel' }
                    ]
                  }
                },
                {
                  name: 'fill',
                  title: 'Fill',
                  type: 'string',
                  description: 'Fill color (e.g., "currentColor", "none", "#000000")'
                },
                {
                  name: 'strokeWidth',
                  title: 'Stroke Width',
                  type: 'string',
                  description: 'Stroke width (e.g., "2", "1.5")'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}