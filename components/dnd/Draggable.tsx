import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Attribute } from "@/model/Person";

import styles from "./styles.module.css";

export function Draggable({
  children,
  attribute,
}: {
  children: ReactNode;
  attribute: Attribute;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: attribute,
    data: {
      attribute,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
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
