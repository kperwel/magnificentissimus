import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";

import styles from "./styles.module.css";

export function Draggable<T extends { id: number | string }>({
  children,
  payload,
}: {
  children: ReactNode;
  payload: T;
}) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable(
    {
      id: payload.id,
      data: payload,
    }
  );
  const style = transform
    ? {
        opacity: active ? 0 : 1,
      }
    : undefined;

  return (
    <div className={styles.draggable} ref={setNodeRef} style={style}>
      {children}
      <button className={styles.drag} {...listeners} {...attributes}>
        DRAG
      </button>
    </div>
  );
}
