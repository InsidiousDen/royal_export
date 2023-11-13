export const Play = ({ fill, size }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 280 + "px"}
      height={size ?? 280 + "px"}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={fill ?? "#939dab"}
        stroke="none"
      >
        <path
          d="M986 3714 c-446 -81 -817 -411 -940 -837 -193 -666 250 -1350 954
-1473 128 -22 359 -15 480 15 231 57 449 180 599 335 l35 36 446 0 446 0 35
-36 c18 -20 70 -64 114 -99 224 -175 483 -265 765 -265 461 0 877 256 1084
668 42 84 85 223 101 329 85 561 -250 1098 -801 1282 -189 63 -119 61 -1753
60 -1241 -1 -1499 -3 -1565 -15z m2939 -533 c158 -71 167 -296 15 -380 -107
-60 -247 -12 -295 101 -73 176 109 357 280 279z m-2667 -106 c84 -36 123 -103
130 -222 l5 -83 74 0 c44 0 89 -6 111 -15 152 -64 172 -273 34 -370 -39 -27
-53 -30 -132 -33 l-88 -4 -4 -82 c-5 -99 -32 -155 -96 -200 -57 -40 -149 -48
-208 -18 -87 45 -124 112 -124 227 l0 75 -80 0 c-89 0 -134 17 -182 67 -98
103 -67 267 64 334 28 14 58 19 118 19 l80 0 0 78 c1 113 37 179 125 225 39
21 125 21 173 2z m2240 -320 c78 -33 126 -106 126 -195 1 -181 -214 -277 -351
-157 -115 101 -89 276 52 350 39 21 125 21 173 2z m860 -4 c166 -85 160 -315
-10 -385 -48 -20 -118 -20 -166 -1 -167 71 -169 317 -2 389 50 22 133 20 178
-3z m-420 -430 c158 -81 146 -316 -20 -385 -134 -56 -288 47 -288 194 0 165
162 266 308 191z"
        />
      </g>
    </svg>
  );
};
