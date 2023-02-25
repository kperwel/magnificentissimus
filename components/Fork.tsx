import { Generation } from "./Generation";
import { Leaf } from "./Leaf";
import styles from "./Fork.module.css";
import { getPair, Tag } from "@/model/Tag";

export const Fork = ({ tag, id = 1 }: { tag: Tag, id?: number }) => {
  const [parents] = getPair(tag) ?? [null, null];
  return (
    <div className={styles.fork}>
      <Generation>
        <Leaf tag={tag} id={id} />
      </Generation>
      {parents !== null ? (
        <Generation>
          {parents.map((p, key) => (
            <div key={key + p} className={styles.branch}>
              {p !== null ? (
                <Fork tag={p} id={id * 2 + key} />
              ) : (
                <Leaf tag={p} id={id * 2 + key} />
              )}
            </div>
          ))}
        </Generation>
      ) : null}
    </div>
  );
};
