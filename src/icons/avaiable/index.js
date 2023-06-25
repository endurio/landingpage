const EthereumBorder = () => {
  return (
    <svg
      width="276"
      height="292"
      viewBox="0 0 276 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2736_17059)">
        <rect
          width="276"
          height="292"
          rx="24"
          fill="black"
          fill-opacity="0.1"
        />
        <rect
          x="0.5"
          y="0.5"
          width="275"
          height="291"
          rx="23.5"
          stroke="white"
          stroke-opacity="0.15"
        />
        <rect
          x="0.5"
          y="0.5"
          width="275"
          height="291"
          rx="23.5"
          stroke="url(#paint0_linear_2736_17059)"
          stroke-opacity="0.85"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2736_17059"
          x="-64"
          y="-64"
          width="404"
          height="420"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2736_17059"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2736_17059"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2736_17059"
          x1="138"
          y1="0"
          x2="138"
          y2="292"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#33CEFF" />
          <stop offset="0.562842" stop-color="#D633FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { EthereumBorder };
