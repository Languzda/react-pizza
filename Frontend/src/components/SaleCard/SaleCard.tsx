import React from "react";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { urlFor } from "../../client";

import { Card } from "..";

import styles from "./SaleCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  image?: ImageUrlBuilder | any;
};

const SaleCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <Card className={styles.sale_card}>
      <div className={styles.img_box}>
        {/* <img src={urlFor(image).url()} alt="Sale" /> */}
        <img src={image} alt="Sale" />
      </div>
      <h2 className="sale__heading">{title} </h2>
      <p className="sale__description">{description} </p>
      <Link to="/menu" className={styles.btn}>
        Zobacz menu
      </Link>
    </Card>
  );
};

export default SaleCard;
