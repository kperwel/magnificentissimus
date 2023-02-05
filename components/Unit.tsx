import { Level } from "./Level";
import { TreeCircle } from "./TreeCircle";
import styles from "./Unit.module.css";
import { getAllAttributes, createTitle, Person } from "@/model/Person";
import { ReactNode } from "react";

const Group = ({ children }: { children: ReactNode }) => (
  <div className={styles.group}>{children}</div>
);

export const Unit = ({ person, first = false }: { person: Person, first: boolean }) => (
  <div className={styles.unit}>
    <Level>
      <TreeCircle
        first={first}
        id={person.id}
        imNot={createTitle(getAllAttributes(person))}
        name={`${person.name} ${createTitle(
          person.targetAttributes
            ? person.targetAttributes
            : getAllAttributes(person)
        )}`}
      />
    </Level>
    {person.parents ? (
      <Level>
        {person.parents?.map((p) => (
          <Group key={p.id}>
            {p !== null ? (
              <Unit person={p} first={false} />
            ) : (
              <TreeCircle first={false} id={-1} name={"unknown"} />
            )}
          </Group>
        ))}
      </Level>
    ) : null}
  </div>
);
