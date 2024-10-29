import { useState } from 'react';
function State() {
  const [hide, sethide] = useState(true);
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{hide ? '' : 'Goodbye World'}</h1>
      <button onClick={() => sethide(!hide)}>Show/hide</button>

      <h1>{count}</h1>

      <button onClick={() => setcount(count + 1)}>increase</button>
      <button onClick={() => setcount(count - 1)}>decrease</button>
      <button onClick={() => setcount(0)}>set to 0</button>
    </div>
  );
}
export default State;
