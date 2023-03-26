import styles from "./styles/Home.module.scss";
import { client } from "../client";
import { useEffect, useState } from "react";
import { SaleCard } from "../components";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

class Sale {
  _id: string;
  name: string;
  description: string;
  image: ImageUrlBuilder | String;
  constructor(
    _id: string,
    name: string,
    description: string,
    image?: ImageUrlBuilder | String
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.image = image
      ? image
      : "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg";
  }
}

const DUMMY_SALES: Sale[] = [
  {
    _id: "1",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
  {
    _id: "2",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
  {
    _id: "3",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
  {
    _id: "4",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
  {
    _id: "5",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
  {
    _id: "6",
    name: "Pizza Margherita",

    description: "Najbardziej reaktywna pizza w mieście",
    image:
      "https://cdn.aniagotuje.com/pictures/articles/2023/02/38768537-v-1500x1500.jpg",
  },
];

const HomePage = () => {
  const [sales, setSales] = useState<Sale[]>(DUMMY_SALES);

  // useEffect(() => {
  //   const query = `*[_type == "sales"]`;

  //   const fetchData = async () => {
  //     const response = await client.fetch(query);
  //     
  //     setSales(
  //       response.map(
  //         (sale: any) =>
  //           new Sale(
  //             sale._id,
  //             sale.saleName,
  //             sale.saleDescription,
  //             sale.saleImage
  //           )
  //       )
  //     );
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className="header__title">Witaj w naszej Pizzerii</h1>
        <p className="header__subtitle">
          U nas dostaniesz najbardziej reaktywną pizze w mieście
        </p>
        <a href="/menu" className="header__button">
          Zobacz menu{" "}
        </a>
        <button>Click</button>
      </header>
      <main>
        <section className={styles.sales}>
          {sales.map((sale) => (
            <SaleCard
              key={sale._id}
              title={sale.name}
              description={sale.description}
              image={sale.image}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
