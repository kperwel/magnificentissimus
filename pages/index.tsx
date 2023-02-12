import { AttributeCard } from "@/components/AttributeCard";
import { Camera } from "@/components/Camera";
import { Fork } from "@/components/Fork";
import { DataRef, DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import Head from "next/head";

import styles from "../styles/Game.module.css";
import { example } from "@/model/data";
import { Tag } from "@/model/Tag";
import { useState } from "react";

export default function Home() {
  const [ dragging, setDragging ] = useState<Tag | null>(null);

  const onDragStart = (event: DragStartEvent) => {
    const data = event.active.data as DataRef<{ attribute: Tag }>;

    if (data.current?.attribute) {
      setDragging(data.current.attribute);
    }
  }

  const onDragEnd = (event: DragEndEvent) => {
    console.log("onDragEnd", event);
    setDragging(null);
  }


  return (
    <>
      <Head>
        <title>The Magnificentissimus</title>
        <meta name="description" content="The Magnici" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <main className={styles.main}>
          <Camera>
              <Fork person={example} />
          </Camera>
          <div className={styles.drawer}>
            <ul className={styles.attributesList}>
              <li>
                <AttributeCard attribute={Tag.Bad} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Good} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Conqueror} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Beardy} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Fat} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Evil} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Jumpy} />
              </li>
            </ul>
          </div>
        </main>

        <DragOverlay>
          { dragging !== null ? <AttributeCard attribute={dragging} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
