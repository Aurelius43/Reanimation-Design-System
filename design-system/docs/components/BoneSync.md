# BoneSync

Bone Sync makes energy legible: segments, joints, gaps and amplitude along a signal line — Micro, Status, Audio Track, Performance and Hero signals.

`RA.BoneSync` · 20 — Signature Layer

## Use

```jsx
<RA.BoneSync />
```


## Props (BoneSyncProps)

| prop | type | note |
| --- | --- | --- |
| `type` | `"micro" \| "status" \| "audio" \| "performance" \| "hero"` |  |
| `values` | `number[]` |  |
| `width` | `number` |  |
| `label` | `string` |  |

## Guidance

Bone Sync makes energy legible: segments, joints, gaps and amplitude along a signal line — Micro, Status, Audio Track, Performance and Hero signals.

`type`, `values` (0–1 amplitudes; drive them from real data), `width`, `label`. Performance and Hero use `mutation-live` with a directional arrow; Micro and Audio use `text-primary`. It is an identity layer: keep standard transport, volume and direct actions beside it, and never fabricate data.
