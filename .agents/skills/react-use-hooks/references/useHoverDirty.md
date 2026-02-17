---
category: Sensors
---

# useHoverDirty

Tracks mouse hover state using a ref (more direct than useHover).

## Usage

```tsx
import { useHoverDirty } from 'react-use';

const Demo = () => {
  const ref = React.useRef(null);
  const isHovered = useHoverDirty(ref);

  return (
    <div
      ref={ref}
      style={{ background: isHovered ? 'lightblue' : 'white' }}
    >
      {isHovered ? 'Hovered!' : 'Hover me'}
    </div>
  );
};
```

### Conditional Rendering

```tsx
const ref = React.useRef(null);
const isHovered = useHoverDirty(ref);

return (
  <div ref={ref}>
    <button>Hover for more</button>
    {isHovered && <div>Additional options...</div>}
  </div>
);
```

## Type Declarations

```ts
function useHoverDirty(
  ref: RefObject<HTMLElement>,
  enabled?: boolean
): boolean;
```

## Parameters

- **ref** — React ref pointing to the target element
- **enabled** — Enable/disable hover tracking (default: `true`)

## Return Value

Returns `true` when the element is being hovered, `false` otherwise.

## Related

- [`useHover`](./useHover.md) — Hover tracking with element cloning
