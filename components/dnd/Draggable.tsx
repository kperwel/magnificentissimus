import React, { ReactNode, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';

import styles from "./styles.module.css";
import { useSpring, motion } from "framer-motion";

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
  
  const z = useSpring(0)

  useEffect(() => {
    z.set(active ? 10 : 0)
  }, [active, z]);

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <motion.div className={styles.draggable} ref={setNodeRef} style={{ z }}>
      {children}
      <button className={styles.drag} {...listeners} {...attributes}>
        DRAG
      </button>
    </motion.div>
  );
}
