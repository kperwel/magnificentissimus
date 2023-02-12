import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import styles from "./Leaf.module.css";
import { BubbleStyle, TextBubble } from "./TextBubble";
import { createTitle, Person } from "@/model/Person";

export const Leaf = ({ person }: { person: Person }) => {
  return (
    <Droppable id={person.id}>
      <article className={`${styles.leaf}`}>
        {false ? <TextBubble text="Text" style={BubbleStyle.Warning} /> : null}
        {false ? <TextBubble text="Text" style={BubbleStyle.Sucess} /> : null}

        <div className={styles.circle}>
          <div className={styles.photo}>
            <King />
          </div>
        </div>
        <h1 className={styles.title}>{person.name} {createTitle(person.all)}</h1>
      </article>
    </Droppable>
  );
};
