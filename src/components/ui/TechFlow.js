"use client";

const techNodes = [
  { label: "React", x: 50, y: 8, color: "#61DAFB" },
  { label: "Next.js", x: 85, y: 20, color: "#ededed" },
  { label: "Node.js", x: 92, y: 50, color: "#68A063" },
  { label: "SpringBoot", x: 80, y: 78, color: "#6DB33F" },
  { label: "Laravel", x: 50, y: 92, color: "#FF2D20" },
  { label: "Android", x: 18, y: 78, color: "#3DDC84" },
  { label: "Python", x: 8, y: 50, color: "#3776AB" },
  { label: "Tailwind", x: 18, y: 20, color: "#06B6D4" },
];

const centralNode = { x: 50, y: 50 };
const NODE_RADIUS = 3.5;
const LABEL_OFFSET = 9;

function getLabelPosition(node) {
  const dx = node.x - centralNode.x;
  const dy = node.y - centralNode.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const nx = dx / dist;
  const ny = dy / dist;
  return {
    lx: node.x + nx * LABEL_OFFSET,
    ly: node.y + ny * LABEL_OFFSET,
    anchor: Math.abs(nx) < 0.3 ? "middle" : nx > 0 ? "start" : "end",
  };
}

export default function TechFlow() {
  return (
    <div className="relative w-[420px] h-[420px] sm:w-[470px] sm:h-[470px] md:w-[520px] md:h-[520px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />

      <svg
        viewBox="-12 -12 124 124"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rotating outer rings */}
        <circle
          cx="50" cy="50" r="44"
          fill="none" stroke="var(--accent)" strokeWidth="0.15" strokeDasharray="4 3"
          className="animate-[spin_30s_linear_infinite]"
          style={{ transformOrigin: "50px 50px" }}
        />
        <circle
          cx="50" cy="50" r="38"
          fill="none" stroke="var(--border)" strokeWidth="0.1" strokeDasharray="2 4"
          className="animate-[spin_40s_linear_infinite_reverse]"
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Connection lines & flowing particles */}
        {techNodes.map((node, i) => (
          <g key={`line-${node.label}`}>
            <line
              x1={centralNode.x} y1={centralNode.y}
              x2={node.x} y2={node.y}
              stroke="var(--border)" strokeWidth="0.2" strokeDasharray="1 1"
            />
            {/* Outward particle */}
            <circle r="0.8" fill={node.color} opacity="0.8">
              <animateMotion
                dur={`${2.5 + i * 0.3}s`}
                repeatCount="indefinite"
                path={`M${centralNode.x},${centralNode.y} L${node.x},${node.y}`}
              />
            </circle>
            {/* Inward particle */}
            <circle r="0.5" fill="var(--accent)" opacity="0.5">
              <animateMotion
                dur={`${3 + i * 0.4}s`}
                repeatCount="indefinite"
                path={`M${node.x},${node.y} L${centralNode.x},${centralNode.y}`}
              />
            </circle>
          </g>
        ))}

        {/* Orbital particles */}
        {[0, 1, 2].map((i) => (
          <circle key={`orbit-${i}`} r="0.6" fill="var(--accent)" opacity={0.6 - i * 0.15}>
            <animateMotion
              dur={`${6 + i * 2}s`} repeatCount="indefinite"
              path="M50,6 A44,44 0 1,1 49.99,6" begin={`${i * 2}s`}
            />
          </circle>
        ))}

        {/* Orbital arrows */}
        {[0, 1, 2, 3].map((i) => (
          <polygon key={`arrow-${i}`} points="0,-0.8 1.4,0 0,0.8" fill="var(--accent)" opacity="0.5">
            <animateMotion
              dur={`${4 + i}s`} repeatCount="indefinite" rotate="auto"
              path="M50,6 A44,44 0 1,1 49.99,6" begin={`${i * 1.5}s`}
            />
          </polygon>
        ))}

        {/* Tech nodes - fully colored circles */}
        {techNodes.map((node, i) => {
          const { lx, ly, anchor } = getLabelPosition(node);
          return (
            <g key={node.label}>
              {/* Node glow */}
              <circle cx={node.x} cy={node.y} r="5" fill={node.color} opacity="0.1">
                <animate attributeName="r" values="5;7;5" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              {/* Solid colored node */}
              <circle cx={node.x} cy={node.y} r={NODE_RADIUS} fill={node.color} />
              {/* Subtle inner highlight */}
              <circle cx={node.x - 0.8} cy={node.y - 0.8} r="1.2" fill="white" opacity="0.2" />

              {/* Arrow line from label to node */}
              <line
                x1={lx} y1={ly}
                x2={node.x + (lx - node.x) * 0.4} y2={node.y + (ly - node.y) * 0.4}
                stroke={node.color} strokeWidth="0.15" opacity="0.6"
              />
              {/* Small arrow tip */}
              <circle
                cx={node.x + (lx - node.x) * 0.4}
                cy={node.y + (ly - node.y) * 0.4}
                r="0.35" fill={node.color} opacity="0.6"
              />

              {/* Label text outside */}
              <text
                x={lx} y={ly}
                textAnchor={anchor}
                dominantBaseline="middle"
                fill={node.color}
                fontSize="2.4"
                fontFamily="var(--font-geist-mono), monospace"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Central node */}
        <circle cx={centralNode.x} cy={centralNode.y} r="10" fill="var(--accent)" opacity="0.08">
          <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={centralNode.x} cy={centralNode.y} r="8" fill="var(--accent)" />
        <circle cx={centralNode.x - 1.5} cy={centralNode.y - 1.5} r="3" fill="white" opacity="0.1" />
        <text
          x={centralNode.x} y={centralNode.y - 1}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize="2.6"
          fontFamily="var(--font-geist-mono), monospace" fontWeight="700"
        >
          Full
        </text>
        <text
          x={centralNode.x} y={centralNode.y + 2}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize="2.6"
          fontFamily="var(--font-geist-mono), monospace" fontWeight="700"
        >
          Stack
        </text>
      </svg>
    </div>
  );
}
