import { ReactNode, useRef } from "react";
import QuickPinchZoom, {
  make3dTransformValue,
  UpdateAction,
} from "react-quick-pinch-zoom";

import styles from "./Camera.module.css";

export const Camera = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onUpdate = ({ x, y, scale }: UpdateAction) => {
    const { current: div } = ref;

    if (div) {
      const value = make3dTransformValue({ x, y, scale });

      div.style.setProperty("transform", value);
    }
  };
  return (
    <div className={styles.camera}>
      <QuickPinchZoom
        onUpdate={onUpdate}
        verticalPadding={10}
        maxZoom={2}
        
        horizontalPadding={10}
      >
        <div className={styles.inside} ref={ref}>
          {children}
        </div>
      </QuickPinchZoom>
    </div>
  );
};
