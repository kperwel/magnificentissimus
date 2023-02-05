import { Level } from "./Level";
import { TreeCircle } from "./TreeCircle";
import styles from "./Unit.module.css";
import { getAllAttributes, createTitle, Person } from "@/model/Person";
import { ReactNode } from "react";

const Group = ({ children }: { children: ReactNode }) => (
  <div className={styles.group}>{children}</div>
);

export const Unit = ({ person, first = false }: { person: Person, first: boolean }) => {
  const currentTitle = createTitle(getAllAttributes(person));
  const targetTitle = person.targetAttributes ? createTitle(person.targetAttributes) : null;
  return (
    <div className={styles.unit}>
      <Level>
        <TreeCircle
          first={first}
          queen={person.girl}
          id={person.id}
          success={currentTitle === targetTitle}
          imNot={currentTitle}
          name={`${person.name} ${targetTitle ? targetTitle : currentTitle}`} />
      </Level>
      {person.parents ? (
        <Level>
          {person.parents?.map((p) => (
            <Group key={p.id}>
              {p !== null ? (
                <Unit person={p} first={false} />
              ) : (
                <TreeCircle first={false} id={-1} name={"unknown"} success={false} queen={false} />
              )}
            </Group>
          ))}
        </Level>
      ) : null}
    </div>
  );
};
