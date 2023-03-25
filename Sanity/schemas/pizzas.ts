export default {
  name: 'pizzas',
  title: 'Pizzas',
  type: 'document',
  fields: [
    {
      name: 'pizzaName',
      title: 'Pizza Name',
      type: 'string',
    },
    {
      name: 'pizzaPrices',
      title: 'Pizza Prices',
      type: 'array',
      of: [
        {
          name: 'pizzaPrice',
          title: 'Pizza Price',
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'string',
              validation: (Rule: {required: () => String}) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule: {required: () => any}) => Rule.required().min(0),
            },
          ],
        },
      ],
    },
    {
      name: 'pizzaToppings',
      title: 'Pizza Toppings',
      type: 'array',
      of: [
        {
          name: 'topping',
          title: 'Topping',
          type: 'reference',

          to: [
            {
              type: 'toppings',
            },
          ],
        },
      ],
    },
  ],
}
