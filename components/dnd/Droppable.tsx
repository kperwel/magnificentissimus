import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export function Droppable({ children, id }: { children: ReactNode, id: number }) {
    const {isOver, setNodeRef} = useDroppable({
      id,
      data: {
        id
      }
    });
    const style = {
      outline: isOver ? '2px solid green' : undefined,
    };
    
    
    return (
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    );
  }