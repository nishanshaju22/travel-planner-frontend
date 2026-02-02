'use client';
export default function Loader({
  size = 120,
  speed = 2,
  className = '',
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Motion path */}
        <defs>
          <path
            id="flightPath"
            d="
              M100,30
              a70,70 0 1,1 0,140
              a70,70 0 1,1 0,-140
            "
          />
          {/* Radial gradient for smoke clouds - darker gray */}
          <radialGradient id="smokeGradient">
            <stop offset="0%" stopColor="rgb(80,80,80)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgb(100,100,100)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(120,120,120)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Enhanced smoke trail with multiple puffs */}
        <g>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i}>
              {/* Main smoke puff */}
              <circle
                r={3 + i * 1.5}
                fill="url(#smokeGradient)"
              >
                <animateMotion
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.1}s`}
                  rotate="auto"
                >
                  <mpath href="#flightPath" />
                </animateMotion>
                {/* Flickering opacity */}
                <animate
                  attributeName="opacity"
                  values="0.7;0.4;0.6;0.3;0.5;0.2;0"
                  dur={`${0.8 + i * 0.1}s`}
                  repeatCount="indefinite"
                />
                {/* Expanding radius */}
                <animate
                  attributeName="r"
                  from={3 + i * 1.5}
                  to={8 + i * 2}
                  dur={`${0.8 + i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Additional wispy smoke layer - darker */}
              <ellipse
                rx={2 + i}
                ry={3 + i * 1.2}
                fill="rgba(90,90,90,0.5)"
              >
                <animateMotion
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.1 + 0.05}s`}
                  rotate="auto"
                >
                  <mpath href="#flightPath" />
                </animateMotion>
                {/* Irregular flickering */}
                <animate
                  attributeName="opacity"
                  values="0.6;0.3;0.7;0.2;0.4;0.1;0"
                  dur={`${0.9 + i * 0.08}s`}
                  repeatCount="indefinite"
                />
                {/* Wobble effect */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0;15;-10;20;-15;0"
                  dur={`${1 + i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>
          ))}
        </g>
        {/* Plane - native SVG with correct rotation */}
        <g>
          <animateMotion
            dur={`${speed}s`}
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#flightPath" />
          </animateMotion>
          {/* Plane icon - orange and filled */}
          <path
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
            fill="#f97316"
            stroke="#ea580c"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -12) rotate(50 12 12)"
          />
        </g>
      </svg>
    </div>
  );
}