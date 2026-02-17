---
category: State
---

# useNumber

Alias for `useCounter`. Numeric counter state with utility functions.

## Usage

```tsx
import { useNumber } from 'react-use';

const Demo = () => {
  const [value, { inc, dec, set, reset }] = useNumber(0, 100, 0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </div>
  );
};
```

## Type Declarations

```ts
function useNumber(
  initialValue?: number,
  max?: number | null,
  min?: number | null
): [number, CounterActions];
```

See [`useCounter`](./useCounter.md) for full documentation.
