const VIEWBOX = { w: 1200, h: 620 }
const LAYERS = [4, 6, 6, 4]


const wobble = (a: number, b: number) => Math.sin((a + 1) * 12.9898 + (b + 1) * 78.233) * 34

// Spread edge to edge so the graph reads as background texture 
const spread = (index: number, total: number, extent: number) =>
  (0.03 + (index / (total - 1)) * 0.94) * extent

const columns = LAYERS.map((count, i) =>
  Array.from({ length: count }, (_, j) => ({
    x: spread(i, LAYERS.length, VIEWBOX.w) + wobble(i, j),
    y: spread(j, count, VIEWBOX.h) + wobble(j, i),
  })),
)

// Link each node only to nearby nodes in the next column
const edges = columns.flatMap((column, i) =>
  i === columns.length - 1
    ? []
    : column.flatMap((from) =>
        columns[i + 1]
          .filter((to) => Math.abs(from.y - to.y) < 190)
          .map((to) => ({ from, to })),
      ),
)

export function NeuralNetworkBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Dims the pattern toward the middle so it doesnt clash with the logo*/}
        <radialGradient id="nn-falloff" cx="50%" cy="50%" r="72%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="45%" stopColor="#4d4d4d" />
          <stop offset="100%" stopColor="#ffffff" />
        </radialGradient>
        <mask id="nn-mask">
          <rect width={VIEWBOX.w} height={VIEWBOX.h} fill="url(#nn-falloff)" />
        </mask>
      </defs>

      <g mask="url(#nn-mask)" stroke="#3b3183" fill="#3b3183" opacity={0.5}>
        {edges.map(({ from, to }, i) => (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            strokeWidth={1}
            strokeOpacity={0.28}
          />
        ))}
        {columns.flat().map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r={3 + (i % 3)} fillOpacity={0.4} stroke="none" />
        ))}
      </g>
    </svg>
  )
}
