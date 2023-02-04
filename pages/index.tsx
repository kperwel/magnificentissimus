import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Dancing_Script } from "@next/font/google";
import { Unit } from "@/components/Unit";
import { tree } from "@/model/mock";
import { Tree } from "@/components/Tree";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { AttributeCard } from "@/components/AttributeCard";
import { useState } from "react";
import { Draggable } from "@/components/dnd/Draggable";
import { Attribute, getAllAttributes, Person } from "@/model/Person";
import Background from "@/components/svg/Background";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  const [used, setUsed] = useState<Array<[number, Attribute]>>([]);
  const [activeId, setActiveId] = useState<Attribute | null>(null);
  function handleDragStart(event: DragStartEvent) {
    const attribute: Attribute = event.active.data.current!.attribute;
    setActiveId(attribute);
  }

  function handleDragEnd(event: DragEndEvent) {
    const attribute: Attribute = event.active.data.current!.attribute;
    if (event.over && event.over.data.current) {
      const personId = event.over.data.current.id as number;
      setUsed([...used, [personId, attribute]]);
    }
    setActiveId(null);
  }

  const state = used.reduce(
    (currentState, setter) =>
      changeAttribute(currentState, setter[0], setter[1]),
    tree
  );
  return (
    <>
      <Head>
        <title>The Magnificentissimus</title>
        <meta name="description" content="The Thest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <main className={`${styles.main} ${dancingScript.className}`}>
          <Tree>
            <Unit person={state} />
          </Tree>
          <div className={styles.attributes}>
            <div className={styles.attributeslist}>
              {[
                ...(state.targetAttributes ?? []),
                Attribute.Bad,
                Attribute.Fattiness,
              ].map((a) => (
                <AttributeCard attribute={a} key={a} />
            ))}
            </div>

            <Background className={styles.background} />
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
