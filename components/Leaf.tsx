import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import styles from "./Leaf.module.css";
import { BubbleStyle, TextBubble } from "./TextBubble";
import { combineTags, Tag } from "@/model/Tag";
import { selections } from "@/model/store";
import { atom, useAtomValue } from "jotai";
import { memo, useMemo } from "react";

const useAssigned = (id: number) =>
  useAtomValue(
    useMemo(
      () =>
        atom((get) => {
          const map = get(selections);
          return {
            assigned: get(selections)[id],
            parentsAssigned: [map[id * 2], map[id * 2 + 1]],
          };
        }),
      [id]
    )
  );

const UnmemoizedLeaf = ({ tag, id }: { tag: Tag; id: number }) => {
  const { assigned, parentsAssigned } = useAssigned(id);

  let isKing = id === 1;
  let hasParentsAssigned = parentsAssigned.filter(Boolean).length > 0;

  return (
    <Droppable disabled={false} payload={{ id }}>
      {(isOver) => (
        <article className={`${styles.leaf}`}>
          {false ? (
            <TextBubble text="Text" style={BubbleStyle.Warning} />
          ) : null}
          {false ? <TextBubble text="Text" style={BubbleStyle.Sucess} /> : null}

          <div className={styles.circle}>
            <div className={styles.photo}>
              <King active={isOver} />
            </div>
          </div>
          <h1 className={styles.title}>
            {isKing
              ? tag
              : hasParentsAssigned
              ? combineTags(parentsAssigned)
              : assigned}
          </h1>
        </article>
      )}
    </Droppable>
  );
};

export const Leaf = memo(UnmemoizedLeaf);
