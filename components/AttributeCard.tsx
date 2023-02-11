import { Tag } from "@/model/Person";
import { default as AttributeSVG } from "@/components/svg/Attribute";
import styles from "./AttributeCard.module.css";
import { Draggable } from "./dnd/Draggable";
export function AttributeCard({ attribute }: { attribute: Tag }) {
  return (
    <Draggable attribute={attribute}>
      <article className={styles.card}>
        <AttributeSVG name={attribute} />
      </article>
    </Draggable>
  );
}
