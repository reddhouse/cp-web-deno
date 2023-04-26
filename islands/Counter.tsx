import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <span>&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
