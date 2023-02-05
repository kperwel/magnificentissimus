import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";
import styles from "./styles.module.css";

export function Droppable({
  children,
  id,
  disable,
}: {
  children: ReactNode;
  id: number;
  disable: boolean;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      id,
    },
  });
  const style = {
    transform: `scale(${isOver ? "1.05" : 1}) translate(0, ${
      isOver ? "5px" : 0
    })`,
  };

  return disable ? (
    <div className={styles.droppable} ref={setNodeRef} style={style}>
      {children}
    </div>
  ) : (
    <div className={styles.droppable}>{children}</div>
  );
}
