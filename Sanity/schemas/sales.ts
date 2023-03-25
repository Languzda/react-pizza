export default {
  name: 'sales',

  title: 'Sales',
  type: 'document',
  fields: [
    {
      name: 'saleName',
      title: 'Sale Name',
      type: 'string',
      validation: (Rule: {required: () => String}) => Rule.required(),
    },
    {
      name: 'saleDescription',
      title: 'Sale Description',
      type: 'text',
      validation: (Rule: {required: () => String}) => Rule.required(),
    },
    {
      name: 'saleImage',
      title: 'Sale Image',

      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
