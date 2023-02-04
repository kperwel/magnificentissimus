import React from "react";

function Background({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 1135 1260"
      className={className}
    >
      <path
        fill="#EAB167"
        d="M1314-180c-73.68 7.829-352.161 21.464-652.563-48.803C321.617-308.29-50.363-219.128-90-180v1386h1404V-180z"
        transform="translate(8.363 -1296) matrix(.88755 0 0 1 55.54 0) matrix(.91026 0 0 .85905 9.923 1519.99)"
      ></path>
      <path
        fill="#E6A754"
        d="M1225.01-186.86c-73.67 7.83-263.171 28.324-563.573-41.943C321.617-308.29-50.363-219.128-90-180l-9.887 118.861c439.355-172.904 806.852-108.03 1315.017-52.927 21.04-18.881 4.81-49.985 9.88-72.794z"
        transform="translate(8.363 -1296) matrix(.88755 0 0 1 55.54 0) matrix(.96165 0 0 .85905 24.057 1528.52)"
      ></path>
      <path
        fill="url(#_Linear1)"
        d="M1234.9-176.926c-73.67 7.829-273.061 18.39-573.463-51.877C321.617-308.29-50.363-219.128-90-180v86.887c439.356-172.904 796.965-76.056 1305.13-20.953-14.01-20.299-19.34-49.004 19.77-62.86z"
        transform="translate(8.363 -1296) matrix(.88755 0 0 1 55.54 0) matrix(.96165 0 0 .85905 14.549 1519.99)"
      ></path>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          x2="1"
          y1="0"
          y2="-0.105"
          gradientTransform="matrix(34.6056 398.115 -44.8619 4.37833 542.789 -281.693)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#D18534"></stop>
          <stop offset="0.26" stopColor="#F1B771"></stop>
          <stop offset="0.46" stopColor="#FFCC8A"></stop>
          <stop offset="1" stopColor="#FFCC89"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Background;
