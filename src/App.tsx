import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (<div>Hello World! <button type="button" onClick={(e) => setCount(count + 1)}>Count: ${count}</button></div>);
}

export default App;
