import style from "./Generation.module.css";

import { ReactNode } from "react";

export const Generation = ({ children }: { children: ReactNode }) => (
  <div className={style.generation}>{children}</div>
);
