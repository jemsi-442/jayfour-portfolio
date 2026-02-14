"use client";

import { useState } from "react";

const layers = [
  {
    radius: 20,
    nodes: [
      {
        label: "Node.js",
        color: "#68A063",
        desc: "Event-driven API layer",
        link: "https://github.com/jemsi-442/rgc-system",
      },
      {
        label: "Symfony",
        color: "#000000",
        desc: "Enterprise service core",
        link: "https://github.com/jemsi-442/marketplace",
      },
      {
        label: "Laravel",
        color: "#FF2D20",
        desc: "Business logic engine",
        link: "https://github.com/jemsi-442/payroll_management",
      },
      {
        label: "Django",
        color: "#092E20",
        desc: "Secure backend framework",
        link: "https://github.com/jemsi-442",
      },
    ],
  },
  {
    radius: 34,
    nodes: [
      { label: "PostgreSQL", color: "#336791", desc: "Primary relational store" },
      { label: "MongoDB", color: "#47A248", desc: "Document data layer" },
      { label: "MySQL", color: "#00758F", desc: "Transactional storage" },
      { label: "Redis", color: "#DC382D", desc: "Caching layer" },
    ],
  },
  {
    radius: 46,
    nodes: [
      { label: "Linux", color: "#FCC624", desc: "Production server OS" },
      { label: "Docker", color: "#2496ED", desc: "Container orchestration" },
      { label: "CI/CD", color: "#10B981", desc: "Automated deployment" },
      { label: "Nginx", color: "#009639", desc: "Edge reverse proxy" },
    ],
  },
];

const center = { x: 50, y: 50 };

function polar(cx, cy, r, angle) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function TechFlow() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-[520px] h-[520px]">
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" />

      <svg viewBox="-10 -10 120 120" className="w-full h-full">
        {/* Orbit rings */}
        {layers.map((layer, i) => (
          <circle
            key={i}
            cx={center.x}
            cy={center.y}
            r={layer.radius}
            fill="none"
            stroke="var(--border)"
            strokeWidth="0.2"
            strokeDasharray="3 4"
            className={`animate-[spin_${50 + i * 20}s_linear_infinite${
              i % 2 ? "_reverse" : ""
            }]`}
            style={{ transformOrigin: "50px 50px" }}
          />
        ))}

        {/* Nodes */}
        {layers.map((layer) =>
          layer.nodes.map((node, i) => {
            const angle = (360 / layer.nodes.length) * i;
            const pos = polar(center.x, center.y, layer.radius, angle);
            const isActive = active?.label === node.label;

            return (
              <g
                key={node.label}
                onMouseEnter={() => setActive(node)}
                onMouseLeave={() => setActive(null)}
                onClick={() => node.link && window.open(node.link, "_blank")}
                style={{ cursor: node.link ? "pointer" : "default" }}
              >
                {/* Data flow pulse */}
                <circle r="1" fill={node.color} opacity="0.6">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M${center.x},${center.y} L${pos.x},${pos.y}`}
                  />
                </circle>

                {/* Connection */}
                <line
                  x1={center.x}
                  y1={center.y}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isActive ? node.color : "var(--border)"}
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                />

                {/* Glow */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 7 : 5}
                  fill={node.color}
                  opacity={isActive ? 0.25 : 0.08}
                />

                {/* Node */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 4.5 : 3}
                  fill={node.color}
                />

                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="2.4"
                  fontFamily="var(--font-geist-mono), monospace"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </g>
            );
          })
        )}

        {/* Core */}
        <circle cx={center.x} cy={center.y} r="15" fill="var(--accent)" opacity="0.08">
          <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite" />
        </circle>

        <circle cx={center.x} cy={center.y} r="11" fill="var(--accent)" />

        <text
          x={center.x}
          y={center.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="3"
          fontFamily="var(--font-geist-mono), monospace"
          fontWeight="700"
        >
          Architect
        </text>
      </svg>

      {/* Tooltip */}
      {active && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface border border-border px-4 py-2 rounded-xl shadow-xl text-sm text-foreground-secondary backdrop-blur-md">
          <span className="font-semibold text-accent">
            {active.label}
          </span>{" "}
          — {active.desc}
        </div>
      )}
    </div>
  );
}
