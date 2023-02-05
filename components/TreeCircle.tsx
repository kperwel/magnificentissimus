import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import KingTitle from "./svg/KingTitle";
import styles from "./TreeCircle.module.css";

export const TreeCircle = ({
  name,
  id,
  first,
  imNot,
}: {
  name: string;
  id: number;
  first: boolean;
  imNot?: string;
}) => (
  <Droppable id={id}>
    <article className={`${styles.leaf} ${first ? styles.first : ""}`}>
      {imNot && first ? (
        <div className={styles.imNot}>
          Hark! I am to be named {"\""}<span>{imNot}</span>{"\""}, with the esteemed lineage of my forebears. See to it that all future documents bear this truth, lest there be consequences for thy lack of diligence.
        </div>
      ) : null}
      <div className={styles.circle}>
        <div className={styles.photo}>
          <King />
        </div>
      </div>
      <h1 className={styles.title}>{name}</h1>
      {/* <KingTitle title={name} /> */}
    </article>
  </Droppable>
);
