import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import KingTitle from "./svg/KingTitle";
import styles from "./TreeCircle.module.css";

export const TreeCircle = ({ name, id }: { name: string; id: number }) => (
  <Droppable id={id}>
    <article className={styles.leaf}>
      <div className={styles.circle}>
        <div className={styles.photo}>
          <King />
        </div>
      </div>
      <KingTitle title={name} />
    </article>
  </Droppable>
);
