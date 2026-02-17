---
category: State
---

# useBoolean

Alias for `useToggle`. Boolean state hook with a toggle function.

## Usage

```tsx
import { useBoolean } from 'react-use';

const Demo = () => {
  const [isVisible, toggle] = useBoolean(false);

  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
};
```

## Type Declarations

```ts
function useBoolean(
  initialValue: boolean
): [boolean, (nextValue?: boolean) => void];
```

See [`useToggle`](./useToggle.md) for full documentation.
