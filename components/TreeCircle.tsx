import { useEffect, useRef } from "react";
import { Droppable } from "./dnd/Droppable";
import { King } from "./svg/King";
import KingTitle from "./svg/KingTitle";
import Queen from "./svg/Queen";
import styles from "./TreeCircle.module.css";

export const TreeCircle = ({
  name,
  id,
  first,
  imNot,
  success = false,
  queen = false,
}: {
  name: string;
  id: number;
  success: boolean;
  first: boolean;
  imNot?: string;
  queen: boolean;
}) => {
    const successRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (successRef.current) {
        successRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

    }, [successRef])

    return (
      <Droppable id={id}>
        <article className={`${styles.leaf} ${first ? styles.first : ""}`}>
          {imNot && first && !success ? (
            <div className={styles.imNot}>
              Hark! I am to be named {'"'}
              <span>{imNot}</span>
              {'"'}, with the esteemed lineage of my forebears!?
            </div>
          ) : null}

          {first && success ? (
            <div ref={successRef} className={`${styles.imNot} ${styles.success}`}>
              Great work my Scribe!
            </div>
          ) : null}

          <div className={styles.circle}>
            <div className={styles.photo}>
              { queen ? <Queen/> : <King /> }
            </div>
          </div>
          <h1 className={styles.title}>{name}</h1>
          {/* <KingTitle title={name} /> */}
        </article>
      </Droppable>
    );
  };
