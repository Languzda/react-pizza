import { FC } from "react";
import Card from "../Card/Card";

import styles from "./ProductCard.module.scss";

type Props = {
  number: number;
  name: string;
  toppings: string[];
  prices: { size: string; price: number }[];
  onAddToCart: (data: {
    number: number;
    name: string;
    size: string;
    price: number;
  }) => void;
};

const ProductCard: FC<Props> = (prop) => {
  const { number, name, toppings, prices, onAddToCart } = prop;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const size = e.currentTarget.size.value;

    const data = {
      number,
      name,
      size,
      price: prices.find((price) => price.size === size)!.price,
    };

    onAddToCart(data);
  };

  return (
    <li>
      <Card className={styles.productCard}>
        <div className={styles.description}>
          <div className={styles.name}>{`${number}. ${name}`}</div>
          <div className={styles.toppings}>{`${toppings.join(", ")}`}</div>
        </div>
        <div className={styles.prices}>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.sizeSelect}>
              <label htmlFor="size">Rozmiar:</label>
              <select name="size" id="size">
                {prices.map((price) => (
                  <option
                    value={price.size}
                  >{`${price.size}: ${price.price} zł`}</option>
                ))}
              </select>
            </div>
            <button className={styles.button}>Dodaj do koszyka</button>
          </form>
        </div>
      </Card>
    </li>
  );
};

export default ProductCard;
