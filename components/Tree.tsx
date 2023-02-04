import { ReactNode, useEffect, useRef } from "react";

import styles from "./Tree.module.css";

export const Tree = ({ children }: { children: ReactNode }) => {
  const tree = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (!tree.current) {
      return;
    }
    tree.current.scrollTo(tree.current.offsetWidth / 2, 0);
  }, [tree]);

  return (
    <div className={styles.tree} ref={tree}>
      <div className={styles.inside}>{children}</div>
    </div>
  );
};
