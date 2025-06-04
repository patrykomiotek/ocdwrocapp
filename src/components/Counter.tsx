import { useEffect, useState } from 'react';
import { Heading, Text } from '@/ui';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);
    console.log('mount');
    console.log('intervalId: ', { id });

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <Heading variant="h1">Counter</Heading>
      <Text>{count}</Text>
    </div>
  );
}
