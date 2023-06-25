const EthereumBorder = () => {
  return (
    <svg
      width="276"
      height="292"
      viewBox="0 0 276 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2736_17061)">
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
          stroke="url(#paint0_angular_2736_17061)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2736_17061"
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
            result="effect1_backgroundBlur_2736_17061"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2736_17061"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_angular_2736_17061"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(138 146) rotate(90) scale(146 138)"
        >
          <stop offset="0.046875" stop-color="#FFC876" />
          <stop offset="0.395833" stop-color="#79FFF7" />
          <stop offset="0.718753" stop-color="#0182FA" />
          <stop offset="1" stop-color="#FF98E2" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export { EthereumBorder };
