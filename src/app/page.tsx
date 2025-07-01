import { Counter } from '@/components/Counter';
import { Title } from '@/components/Title';
import { CounterProvider } from '@/providers/CounterContext';

export default function HomePage() {
  return (
    <CounterProvider count={0}>
      <Title>NextJS React Training</Title>
      <Counter />
    </CounterProvider>
  );
}
