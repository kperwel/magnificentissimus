import { AttributeCard } from "@/components/AttributeCard";
import { Camera } from "@/components/Camera";
import { Fork } from "@/components/Fork";
import { motion } from "framer-motion";
import {
  DataRef,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import Head from "next/head";

import styles from "../styles/Game.module.css";
import { Tag } from "@/model/Tag";
import { useState } from "react";
import { Provider, useSetAtom } from "jotai";
import { selections } from "@/model/store";


const useDragAndDrop = () => {
  const [dragging, setDragging] = useState<Tag | null>(null);
  const setSelections = useSetAtom(selections)

  const onDragStart = (event: DragStartEvent) => {
    const data = event.active.data as DataRef<{ id: Tag }>;

    if (data.current?.id) {
      setDragging(data.current.id);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const draggedData = event.active.data as DataRef<{ id: Tag } | undefined>;
    const droppedData = event.over?.data as DataRef<{ id: number }>;
    const id = droppedData?.current?.id;
    const tag = draggedData.current?.id;

    if (id && tag) {
      console.log(`sets ${id} to ${tag}`);
      setSelections(selections => ({
        ...selections,
        [id]: tag,
      }));
    }
    setDragging(null);
  };

  return [dragging, { onDragEnd, onDragStart }] as const;
};

export default function Game() {
  const [task] = useState(Tag.Monster);
  const [dragging, { onDragEnd, onDragStart }] = useDragAndDrop();

  return (
    <>
      <Head>
        <title>The Magnificentissimus</title>
        <meta name="description" content="The Magnici" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <main className={styles.main}>
          <Camera>
            <Fork tag={task} />
          </Camera>
          <div className={styles.drawer}>
            <ul className={styles.attributesList}>
              {Object.values(Tag).map((tag) => (
                <motion.li
                  key={tag}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, boxShadow: "10px 10px #000" }}
                >
                  <AttributeCard
                    dragging={dragging === tag}
                    data-tag={tag}
                    attribute={tag}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </main>

        <DragOverlay>
          {dragging !== null ? (
            <AttributeCard dragging={false} attribute={dragging} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
