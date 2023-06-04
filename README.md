## use-idleDetection

Custom hook to detect if the user is idle or not.

### Installation

```bash
npm install use-idle-detection
```

with yarn:

```bash
yarn add use-idle-detection
```

### Usage

```jsx
import React from "react"

import useIdleDetection from "use-idle-detection"

const App = () => {
  const { isIdle } = useIdleDetection({
    timeout: 1000
  })

  return (
    <div>
      <h1>{isIdle ? "Idle" : "Not Idle"}</h1>
    </div>
  )
}
```

### Options

| Name        | Type     | Default | Description                                                           |
| ----------- | -------- | ------- | --------------------------------------------------------------------- |
| idleTimeout | `number` | `3000`  | The amount of time in milliseconds before the user is considered idle |

### License

MIT

---

Made with ❤️ by [Muzammil Bilwani](https://muzammilbilwani.com)
