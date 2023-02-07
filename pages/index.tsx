import { AttributeCard } from "@/components/AttributeCard";
import { Tree } from "@/components/Tree";
import { Unit } from "@/components/Unit";
import { Attribute } from "@/model/Person";
import { wizard } from "@/model/persons";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Head from "next/head";

import styles from "../styles/Game.module.css";

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
              <Unit first person={wizard} />
            </div>
          </div>
          <div className={styles.drawer}>
            <ul className={styles.attributesList}>
              <li>
                <AttributeCard attribute={Attribute.Bad} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Good} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Conqueror} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Beardy} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Debug} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Fat} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Evil} />
              </li>
              <li>
                <AttributeCard attribute={Attribute.Jumpy} />
              </li>
            </ul>
          </div>
        </main>

        <DragOverlay>
          <AttributeCard attribute={Attribute.Bad} />
        </DragOverlay>
      </DndContext>
    </>
  );
}
