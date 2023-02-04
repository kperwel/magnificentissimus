import { Attribute } from "@/model/Person";
import styles from "./AttributeCard.module.css";
export function AttributeCard({ attribute }: { attribute: Attribute }) {
  return (
    <article className={styles.card}>
      <h1>{attribute}</h1>
    </article>
  );
}
