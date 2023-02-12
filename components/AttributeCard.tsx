
import { default as AttributeSVG } from "@/components/svg/Attribute";
import { Tag } from "@/model/Tag";
import styles from "./AttributeCard.module.css";
import { Draggable } from "./dnd/Draggable";
export function AttributeCard({ attribute }: { attribute: Tag }) {
  return (
    <Draggable payload={{ id: attribute }}>
      <article className={styles.card}>
        <AttributeSVG name={attribute} />
      </article>
    </Draggable>
  );
}
