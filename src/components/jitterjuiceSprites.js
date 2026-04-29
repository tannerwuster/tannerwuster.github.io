/** Same path as Projects — Artwork/MenuBar assets */
export const JITTERJUICE_ASSET_BASE = "/assets/projects/jitterjuice";

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/** Grid-order spokes only (matches prior 3×3 grid minus hero) */
export const JJ_ORBIT_ICONS = [
  "applejuiceicon.png",
  "bladerunnericon.png",
  "deadlyjuice.png",
  "hailstormjuiceicon.png",
  "moonjuiceicon.png",
  "orangejuiceicon.png",
  "pridejuiceicon.png",
  "treehuggerjuiceicon.png",
];

/**
 * Deterministic mids — fills dark gaps between the hero/wordmark belt and perimeter cans.
 * (Pct from layout box; avoids exact spoke corners.)
 */
const MID_GAP_FILLS = [
  { leftPct: 25, topPct: 34, rotationDeg: -24 },
  { leftPct: 20, topPct: 48, rotationDeg: 33 },
  { leftPct: 27, topPct: 62, rotationDeg: 18 },
  { leftPct: 30, topPct: 21, rotationDeg: -41 },
  { leftPct: 33, topPct: 76, rotationDeg: -14 },
  { leftPct: 75, topPct: 33, rotationDeg: 46 },
  { leftPct: 80, topPct: 47, rotationDeg: -21 },
  { leftPct: 73, topPct: 61, rotationDeg: 26 },
  { leftPct: 70, topPct: 22, rotationDeg: 29 },
  { leftPct: 67, topPct: 77, rotationDeg: -19 },
  { leftPct: 42, topPct: 27, rotationDeg: 12 },
  { leftPct: 58, topPct: 27, rotationDeg: -17 },
  { leftPct: 44, topPct: 73, rotationDeg: 21 },
  { leftPct: 56, topPct: 73, rotationDeg: -28 },
];

function buildMidGapSprites() {
  return MID_GAP_FILLS.map((pos, i) => ({
    id: `jj-midgap-${i}`,
    filename: JJ_ORBIT_ICONS[i % JJ_ORBIT_ICONS.length],
    leftPct: pos.leftPct,
    topPct: pos.topPct,
    rotationDeg: pos.rotationDeg,
    microPhase: ((i * 19) % 61) / 61,
  }));
}

/**
 * Sprinkle smaller cans behind hero/orbit — duplicates filenames on purpose.
 * Positions reject the center (~hero zone) so Jerry stays readable.
 */
export function buildJitterFillSprites(desiredCount = 28) {
  const sprites = [];
  let seed = 0;

  while (sprites.length < desiredCount && seed < 900) {
    seed += 1;
    const i = sprites.length;
    const radius = 28 + (((seed + i * 17) % 24) / 24) * 32;
    const theta = seed * GOLDEN_ANGLE;
    let x = 50 + Math.cos(theta) * radius * 0.94;
    let y = 50 + Math.sin(theta) * radius * 0.9;
    /* Wider horizontal footprint */
    x = 50 + (x - 50) * 1.38;
    x = Math.min(97, Math.max(3, x));
    y = Math.min(87, Math.max(11, y));

    const distFromCenter = Math.hypot(x - 50, y - 50);
    if (distFromCenter < 29) continue;

    const filename = JJ_ORBIT_ICONS[sprites.length % JJ_ORBIT_ICONS.length];
    const rotationDeg = ((seed * 41 + sprites.length * 17) % 130) - 65;
    const microPhase = ((seed % 61) / 61 + (sprites.length % 7) / 11) % 1;

    sprites.push({
      id: `jj-fill-${i}-${seed}`,
      filename,
      leftPct: x,
      topPct: y,
      rotationDeg,
      microPhase,
    });
  }

  return sprites;
}

/** 8‑bit-ish pixel crosses + dots — ring around hero, behind cans */
export function buildJitterStars(desiredCount = 46) {
  const stars = [];
  let seed = 0;

  while (stars.length < desiredCount && seed < 950) {
    seed += 1;
    const theta = seed * GOLDEN_ANGLE * 1.713;
    const r = 8 + (((seed * 53) % 100) / 100) * 42;
    let x = 50 + Math.cos(theta) * r * 1.05;
    let y = 50 + Math.sin(theta) * r * 1.02;
    x = Math.min(97, Math.max(2.8, x));
    y = Math.min(93, Math.max(6.8, y));

    /* Reserve tight core for Jerry + labels */
    if (Math.hypot(x - 50, y - 50) < 21) continue;

    /* Reference: single pixel vs 5‑pixel + (center + 4 cardinals), flat yellow */
    const variantTier = seed % 10;
    stars.push({
      id: `jj-star-${stars.length}-${seed}`,
      leftPct: x,
      topPct: y,
      variant: variantTier < 6 ? "dot" : "cross",
      phase: ((seed * 47) % 997) / 997,
    });
  }

  return stars;
}

/** Built once — stable layout between renders */
export const JITTERJUICE_FILL_SPRITES = [...buildJitterFillSprites(44), ...buildMidGapSprites()];

/** Yellow pixel stars layer (below fill cans) */
export const JJ_PIXEL_STARS = buildJitterStars(52);
