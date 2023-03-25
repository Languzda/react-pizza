import React, { PropsWithChildren } from "react";

import styles from "./Card.module.scss";

const Card: React.FC<PropsWithChildren> = (prop) => {
  return <div className={styles.card}>{prop.children}</div>;
};

export default Card;
