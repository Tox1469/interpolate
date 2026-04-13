[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/interpolate/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/interpolate/actions)
[![License](https://img.shields.io/github/license/Tox1469/interpolate?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/interpolate?style=flat-square)](https://github.com/Tox1469/interpolate/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/interpolate?style=flat-square)](https://github.com/Tox1469/interpolate/stargazers)

---

# interpolate

Interpolacao linear, cubica (Catmull-Rom) e curvas de Bezier em TypeScript puro.

## Instalacao

```bash
npm install interpolate
```

## Uso

```ts
import { lerp, smoothstep, catmullRom, bezierCubic, sampleBezier } from "interpolate";

lerp(0, 100, 0.5);
smoothstep(0, 1, 0.3);
catmullRom(0, 10, 20, 30, 0.5);
bezierCubic(0, 0.5, 1, 1, 0.25);
sampleBezier({ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 0 }, 20);
```

## API

- `clamp`, `lerp`, `inverseLerp`, `remap`.
- `smoothstep`, `smootherstep`.
- `catmullRom`.
- `bezierQuadratic`, `bezierCubic`, `bezierCubicPoint`, `sampleBezier`.

## Licenca

MIT