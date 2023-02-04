import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Attribute } from "@/model/Person";

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
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
