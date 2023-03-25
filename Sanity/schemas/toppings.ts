export default {
  name: 'toppings',
  title: 'Toppings',
  type: 'document',
  fields: [
    {
      name: 'toppingId',
      title: 'Topping ID',
      type: 'number',

      // This is the validation for the toppingId
      validation: (Rule: {required: () => any}) => Rule.required().min(0),

      // This is the prepare for the toppingId
      prepare: (value: {toppingId: number}) => {
        return value.toppingId.toFixed(2)
      },
    },
    {
      name: 'toppingName',
      title: 'Topping Name',
      type: 'string',
    },
    {
      name: 'toppingPrice',
      title: 'Topping Price',
      type: 'number',
    },
  ],
}
