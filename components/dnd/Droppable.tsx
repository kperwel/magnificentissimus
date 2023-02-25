import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";
import styles from "./styles.module.css";

export function Droppable<Payload extends { id: string | number }>({
  children,
  payload,
  disabled = false,
}: {
  children: (isOver: boolean) => ReactNode;
  disabled: boolean;
  payload: Payload;
}) {
  const { isOver, setNodeRef } = useDroppable({
    disabled,
    id: payload.id,
    data: payload,
  });
  const style = {
    transform: `scale(${isOver ? "1.05" : 1}) translate(0, ${
      isOver ? "5px" : 0
    })`,
  };
  return (
    <div className={styles.droppable} ref={setNodeRef} style={style}>
      {children(isOver)}
    </div>
  );
}
