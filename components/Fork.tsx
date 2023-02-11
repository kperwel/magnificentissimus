import { Generation } from "./Generation";
import { Leaf } from "./Leaf";
import styles from "./Fork.module.css";
import { Person } from "@/model/Person";

export const Fork = ({ person, first = false }: { person: Person, first: boolean }) => {
  const currentTitle = person.all.toString();
  const targetTitle = person.all.toString();
  return (
    <div className={styles.fork}>
      <Generation>
        <Leaf
          last={!person.parents}
          first={first}
          queen={false}
          id={person.id}
          success={currentTitle === targetTitle}
          imNot={currentTitle}
          name={`${person.name} ${targetTitle ? targetTitle : currentTitle}`} />
      </Generation>
      {person.parents ? (
        <Generation>
          {person.parents?.map((p) => (
            <div key={p.id} className={styles.branch}>
              {p !== null ? (
                <Fork person={p} first={false} />
              ) : (
                <Leaf last={false} first={false} id={-1} name={"unknown"} success={false} queen={false} />
              )}
            </div>
          ))}
        </Generation>
      ) : null}
    </div>
  );
};
