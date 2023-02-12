import { Generation } from "./Generation";
import { Leaf } from "./Leaf";
import styles from "./Fork.module.css";
import { Person } from "@/model/Person";

export const Fork = ({ person }: { person: Person }) => {
  const currentTitle = person.all.toString();
  const targetTitle = person.all.toString();
  return (
    <div className={styles.fork}>
      <Generation>
        <Leaf person={person} />
      </Generation>
      {person.parents.length > 0 ? (
        <Generation>
          {person.parents?.map((p) => (
            <div key={p.id} className={styles.branch}>
              {p !== null ? (
                <Fork person={p} />
              ) : (
                <Leaf person={p} />
              )}
            </div>
          ))}
        </Generation>
      ) : null}
    </div>
  );
};
