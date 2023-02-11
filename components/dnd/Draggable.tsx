import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Tag } from "@/model/Person";

import styles from "./styles.module.css";

export function Draggable({
  children,
  attribute,
}: {
  children: ReactNode;
  attribute: Tag;
}) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id: attribute,
    data: {
      attribute,
    },
  });
  const style = transform
    ? {
        opacity: active ? 0 : 1
      }
    : undefined;

  return (
    <div
      className={styles.draggable}
      ref={setNodeRef}
      style={style}
    >
      {children}
      <button className={styles.drag} {...listeners} {...attributes}>DRAG</button>
    </div>
  );
}
