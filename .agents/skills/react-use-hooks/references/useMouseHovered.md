---
category: Sensors
---

# useMouseHovered

Extended mouse tracking with options for bounded coordinates and hover-only tracking.

## Usage

```tsx
import { useMouseHovered } from 'react-use';

const Demo = () => {
  const ref = React.useRef(null);
  const state = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });

  return (
    <div ref={ref} style={{ width: 300, height: 300, background: '#f0f0f0' }}>
      <div>Element X: {state.elX}</div>
      <div>Element Y: {state.elY}</div>
    </div>
  );
};
```

### Bounded Coordinates

When `bound: true`, coordinates are clamped to stay within element boundaries:

```tsx
const state = useMouseHovered(ref, { bound: true });
// elX will be between 0 and elW
// elY will be between 0 and elH
```

### Track Only When Hovered

When `whenHovered: true`, mousemove events are only listened to when the element is being hovered:

```tsx
const state = useMouseHovered(ref, { whenHovered: true });
```

## Type Declarations

```ts
interface MouseHoveredState {
  docX: number;
  docY: number;
  posX: number;
  posY: number;
  elX: number;
  elY: number;
  elH: number;
  elW: number;
}

interface UseMouseHoveredOptions {
  bound?: boolean;
  whenHovered?: boolean;
}

function useMouseHovered(
  ref: RefObject<HTMLElement>,
  options?: UseMouseHoveredOptions
): MouseHoveredState;
```

## Parameters

- **ref** — React ref pointing to the target element
- **options** — Configuration object:
  - **bound** — Clamp coordinates to element boundaries (default: `false`)
  - **whenHovered** — Only track when hovering over element (default: `false`)

## Return Value

Returns the same `MouseHoveredState` object as `useMouse`.
