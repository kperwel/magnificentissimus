import { default as AttributeSVG } from "@/components/svg/Attribute";
import { Tag } from "@/model/Tag";
import styles from "./AttributeCard.module.css";
import { Draggable } from "./dnd/Draggable";
export function AttributeCard({
  attribute,
  dragging,
}: {
  attribute: Tag;
  dragging: boolean;
}) {
  return (
    <Draggable payload={{ id: attribute }}>
      <article className={styles.card} style={{ opacity: dragging ? 0 : 1 }}>
        <AttributeSVG name={attribute} />
      </article>
    </Draggable>
  );
}
