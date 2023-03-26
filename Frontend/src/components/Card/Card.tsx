import React, { PropsWithChildren } from "react";

import styles from "./Card.module.scss";

interface Props extends PropsWithChildren<{}> {
  className?: string;
}

const Card: React.FC<Props> = (prop) => {
  const classes = [styles.card, prop.className].join(" ");

  return <div className={classes}>{prop.children}</div>;
};

export default Card;
