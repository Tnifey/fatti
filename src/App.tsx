import { useState } from 'preact/compat';

export default function App(props: any) {
  const [count, setCount] = useState(0);
  return (<div>
    <button type="button" onClick={(e) => setCount(count + 1)}>
      Count: {count}
    </button>
  </div>);
}
