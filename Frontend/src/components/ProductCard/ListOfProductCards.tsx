import React from "react";

import styles from "./ListOfProductCards.module.scss";
import ProductCard from "./ProductCard";

const DUMMY_DATA = [
  {
    number: 1,
    name: "Margarita",
    toppings: ["Ser", "Sos", "Oregano", "Bazylia"],
    prices: [
      { size: "Mała", price: 20 },
      { size: "Średnia", price: 25 },
      { size: "Duża", price: 30 },
    ],
  },
  {
    number: 2,
    name: "Hawajska",
    toppings: ["Ser", "Sos", "Oregano", "Bazylia", "Ananas", "Szynka"],
    prices: [
      { size: "Mała", price: 20 },
      { size: "Średnia", price: 25 },
      { size: "Duża", price: 30 },
    ],
  },
  {
    number: 3,
    name: "Pepperoni",
    toppings: ["Ser", "Sos", "Oregano", "Bazylia", "Pepperoni"],
    prices: [
      { size: "Mała", price: 20 },
      { size: "Średnia", price: 25 },
      { size: "Duża", price: 30 },
    ],
  },
];

const ListOfProductCards = () => {
  const onAddToCart = (data: {
    number: number;
    name: string;
    size: string;
    price: number;
  }) => {
    console.log(data);
  };

  const list = DUMMY_DATA.map((product) => {
    return (
      <ProductCard
        key={product.number}
        number={product.number}
        name={product.name}
        toppings={product.toppings}
        prices={product.prices}
        onAddToCart={onAddToCart}
      />
    );
  });

  return <ul className={styles.list}>{list}</ul>;
};

export default ListOfProductCards;
