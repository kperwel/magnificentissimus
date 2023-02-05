import React from "react";

import styles from "./styles.module.css";

function KingTitle({ title }: { title: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 605 110"
      className={styles.title}
    >
      <path
        fill="#C4D7FE"
        stroke="#88A0BD"
        strokeWidth="6.97"
        d="M873 319.5c-12.418 0-22.5-6.049-22.5-13.5h-495c0 7.451-10.082 13.5-22.5 13.5v27c12.418 0 22.5 6.049 22.5 13.5h495c0-7.451 10.082-13.5 22.5-13.5v-27z"
        transform="translate(-255.729 -447.579) matrix(1.1 0 0 1.83333 -105.3 -108.15)"
      ></path>
      <text className={styles.text} x="50%" y="80%" textAnchor="middle">{title}</text>
    </svg>
  );
}

export default KingTitle;
