import { AttributeCard } from "@/components/AttributeCard";
import { Tree } from "@/components/Tree";
import { Fork } from "@/components/Fork";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Head from "next/head";

import styles from "../styles/Game.module.css";
import { example } from "@/model/data";
import { Tag } from "@/model/Tag";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Magnificentissimus</title>
        <meta name="description" content="The Magnici" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <DndContext>
        <main className={styles.main}>
          <div className={styles.viewport}>
            <div className={styles.viewportInside}>
              <Fork first person={example} />
            </div>
          </div>
          <div className={styles.drawer}>
            <ul className={styles.attributesList}>
              <li>
                <AttributeCard attribute={Tag.Bad} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Good} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Conqueror} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Beardy} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Fat} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Evil} />
              </li>
              <li>
                <AttributeCard attribute={Tag.Jumpy} />
              </li>
            </ul>
          </div>
        </main>

        <DragOverlay>
          <AttributeCard attribute={Tag.Bad} />
        </DragOverlay>
      </DndContext>
    </>
  );
}
