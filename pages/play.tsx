import styles from "@/styles/Home.module.css";

import { Dancing_Script } from "@next/font/google";
import { Unit } from "@/components/Unit";
import { tasks } from "@/model/tasks";
import { Tree } from "@/components/Tree";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { AttributeCard } from "@/components/AttributeCard";
import { useMemo, useRef, useState } from "react";
import { Attribute, Person } from "@/model/Person";
import Background from "@/components/svg/Background";
import { Howl } from "howler";
import Head from "next/head";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  const [used, setUsed] = useState<Array<[number, Attribute]>>([]);
  const [activeId, setActiveId] = useState<Attribute | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const [task, setTask] = useState(tasks[2]);

  const sounds = useMemo(() => {
    return new Howl({
      src: ["shuffling.wav"],
      volume: 0.5,
      sprite: {
        shuffle: [1600, 1000],
        shuffle2: [6400, 6300],
      },
    });
  }, []);

  function handleDragStart(event: DragStartEvent) {
    const attribute: Attribute = event.active.data.current!.attribute;
    sounds.play("shuffle");
    setActiveId(attribute);
  }

  function handleDragEnd(event: DragEndEvent) {
    const attribute: Attribute = event.active.data.current!.attribute;
    if (event.over && event.over.data.current) {
      const personId = event.over.data.current.id as number;
      sounds.play("shuffle2");
      setUsed([...used, [personId, attribute]]);
    }
    setActiveId(null);
  }

  const state = used.reduce(
    (currentState, setter) =>
      changeAttribute(currentState, setter[0], setter[1]),
    task.person
  );
  return (
    <>
      <Head>
        <title>The Magnificentissimus | play</title>
      </Head>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <main
          ref={mainRef}
          className={`${styles.main} ${dancingScript.className}`}
        >
          <Tree>
            <Unit person={state} first={true} />
          </Tree>
          <div className={styles.attributes}>
            <div className={styles.wrapper}>
              <div className={styles.attributeslist}>
                {task.attributes.map((a) => (
                  <AttributeCard attribute={a} key={a} />
                ))}
              </div>

              <Background className={styles.background} />
            </div>
          </div>
          <DragOverlay>
            {activeId ? <AttributeCard attribute={activeId} /> : null}
          </DragOverlay>
        </main>
      </DndContext>
    </>
  );
}
function changeAttribute(
  person: Person,
  personId: number,
  attribute: Attribute
): Person {
  if (person.id === personId) {
    return {
      ...person,
      attribute: attribute,
    };
  } else {
    return {
      ...person,
      parents: person.parents
        ? [
            changeAttribute(person.parents[0], personId, attribute),
            changeAttribute(person.parents[1], personId, attribute),
          ]
        : person.parents,
    };
  }
}
