export const clamp = (v: number, lo = 0, hi = 1): number =>
  v < lo ? lo : v > hi ? hi : v;

/** Linear interpolation between a and b at t in [0,1]. */
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

/** Inverse of lerp: returns t so that lerp(a, b, t) = v. */
export const inverseLerp = (a: number, b: number, v: number): number =>
  a === b ? 0 : (v - a) / (b - a);

export const remap = (
  v: number,
  fromA: number,
  fromB: number,
  toA: number,
  toB: number,
): number => lerp(toA, toB, inverseLerp(fromA, fromB, v));

/** Smoothstep (Hermite) easing. */
export const smoothstep = (a: number, b: number, t: number): number => {
  const x = clamp((t - a) / (b - a));
  return x * x * (3 - 2 * x);
};

export const smootherstep = (a: number, b: number, t: number): number => {
  const x = clamp((t - a) / (b - a));
  return x * x * x * (x * (x * 6 - 15) + 10);
};

/** Catmull-Rom cubic spline through p1 and p2 (with p0, p3 as neighbors). */
export function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  );
}

/** Quadratic Bezier (3 control values). */
export function bezierQuadratic(p0: number, p1: number, p2: number, t: number): number {
  const mt = 1 - t;
  return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
}

/** Cubic Bezier (4 control values). */
export function bezierCubic(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  t: number,
): number {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;
  return mt2 * mt * p0 + 3 * mt2 * t * p1 + 3 * mt * t2 * p2 + t2 * t * p3;
}

/** 2D cubic Bezier for a point {x,y}. */
export interface Point {
  x: number;
  y: number;
}

export function bezierCubicPoint(
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  t: number,
): Point {
  return {
    x: bezierCubic(p0.x, p1.x, p2.x, p3.x, t),
    y: bezierCubic(p0.y, p1.y, p2.y, p3.y, t),
  };
}

/** Samples n+1 evenly-spaced points along a cubic Bezier curve. */
export function sampleBezier(p0: Point, p1: Point, p2: Point, p3: Point, n: number): Point[] {
  if (n < 1) throw new Error("n must be >= 1");
  const out: Point[] = [];
  for (let i = 0; i <= n; i++) out.push(bezierCubicPoint(p0, p1, p2, p3, i / n));
  return out;
}
