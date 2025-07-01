import { AsyncCounter } from '@/components/AsyncCounter';
import { Title } from '@/components/Title';

export default function PopInHydration() {
  return (
    <>
      <Title>NextJS React Training</Title>
      <p>The count message will pop in after hydration</p>
      <AsyncCounter />
    </>
  );
}
