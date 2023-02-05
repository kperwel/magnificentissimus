import React from "react";
import styles from "./styles.module.css";

function Attribute({ name }: { name: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 310 363"
    >
      <path
        fill="#FF9B00"
        d="M287.482 1579.78c-39.375-4.8-78.211-13.34-115.688-30.79-3.864-1.8-8.923-1.89-12.912-.22-39.234 16.4-78.035 25.3-116.632 31.07-5.439.81-9.313 4.09-9.313 7.88v240.59c0 4.45 5.31 8.07 11.859 8.07h240.593c6.55 0 11.859-3.62 11.859-8.07v-240.59c0-3.91-4.114-7.25-9.766-7.94zm-13.952 14.61v225.86H56.656v-226.11c35.81-5.82 71.78-14.47 108.111-28.96 35.385 15.56 71.808 24.11 108.763 29.21z"
        transform="translate(-390.729 -1240.39) translate(0 -666.499) matrix(.8529 0 0 -1.25426 404.594 4210.17)"
      ></path>
      <path
        fill="#330600"
        d="M285.389 1587.72c-40.954-5-81.317-13.93-120.296-32.08-40.473 16.92-80.482 26.13-120.297 32.08v240.59h240.593v-240.59z"
        transform="translate(-390.729 -1240.39) translate(0 -666.499) matrix(.8529 0 0 -1.25426 404.594 4210.17)"
      ></path>
      <path
        fill="#620C00"
        stroke="url(#_Radial1)"
        strokeWidth="7.78"
        d="M873 319.5c0-7.451-20.042-13.5-44.729-13.5H377.729C353.042 306 333 312.049 333 319.5v27c0 7.451 20.042 13.5 44.729 13.5h450.542c24.687 0 44.729-6.049 44.729-13.5v-27z"
        transform="translate(-390.729 -1240.39) translate(0 -666.499) matrix(.55333 0 0 1.83333 211.74 1524.12)"
      ></path>
      <g>
        <text
          className={styles.attributeText}
          textAnchor="middle"
          x="540.08"
          y="1481.81"
          fontSize="36"
          transform="translate(-390.729 -1240.39) translate(0 -666.499) translate(-.624 666.499)"
        >
          {name}
        </text>
      </g>
      <defs>
        <radialGradient
          id="_Radial1"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(270 0 0 27 603 333)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF4900"></stop>
          <stop offset="0.97" stopColor="#FF5600"></stop>
          <stop offset="1" stopColor="#FF9B00"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Attribute;
