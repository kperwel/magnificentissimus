import style from "./Level.module.css";

import { ReactNode } from "react";

export const Level = ({ children }: { children: ReactNode }) => (
  <div className={style.level}>{children}</div>
);
