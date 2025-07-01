'use client';

import { useCounterContext } from '@/providers/CounterContext';
import { Button } from '../Button';

export function CounterActions() {
  const { decrement, increment, reset, setCount } = useCounterContext(
    ({ decrement, increment, reset, setCount }) => ({
      decrement,
      increment,
      reset,
      setCount
    })
  );

  return (
    <div className="flex gap-4 items-center w-full justify-center max-w-2xl">
      <Button onClick={() => decrement(5)}>Decrement -5</Button>
      <Button onClick={() => decrement()}>Decrement -1</Button>
      <Button onClick={() => reset()}>Reset</Button>
      <Button onClick={() => setCount(10)}>Set to 10</Button>
      <Button onClick={() => increment()}>Increment +1</Button>
      <Button onClick={() => increment(5)}>Increment +5</Button>
    </div>
  );
}
