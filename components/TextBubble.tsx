import styles from "./TextBubble.module.css";

export enum BubbleStyle {
  Default = "default",
  Sucess = "success",
  Warning = "warning",
}

interface TextBubblePropsType {
  text: string;
  style?: BubbleStyle;
}

export function TextBubble({
  text,
  style = BubbleStyle.Default,
}: TextBubblePropsType) {
  return <div className={`${styles[style]} ${styles.bubble}`}>{text}</div>;
}
