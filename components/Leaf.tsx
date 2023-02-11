import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import Queen from "./svg/Queen";
import styles from "./Leaf.module.css";
import { BubbleStyle, TextBubble } from "./TextBubble";

export const Leaf = ({
  name,
  id,
  first,
  imNot,
  last = false,
  success = false,
  queen = false,
}: {
  name: string;
  id: number;
  last: boolean,
  success: boolean;
  first: boolean;
  imNot?: string;
  queen: boolean;
}) => {
    return (
      <Droppable id={id} disable={last}>
        <article className={`${styles.leaf} ${first ? styles.first : ""}`}>
          {imNot && first && !success ? <TextBubble text={imNot} style={BubbleStyle.Warning} /> : null}
          {imNot && first && success ? <TextBubble text={imNot} style={BubbleStyle.Sucess} /> : null}

          <div className={styles.circle}>
            <div className={styles.photo}>
              { queen ? <Queen/> : <King /> }
            </div>
          </div>
          <h1 className={styles.title}>{name}</h1>
        </article>
      </Droppable>
    );
  };
