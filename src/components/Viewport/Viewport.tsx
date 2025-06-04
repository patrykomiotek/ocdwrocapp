import { useViewport } from '@/hooks/useViewport';
import { Text } from '@/ui';

export function Viewport() {
  const size = useViewport();

  return (
    <div>
      <Text>
        x: {size.x}, y: {size.y}
      </Text>
      {/* <p>{JSON.stringify(size, null, 2)}</p> */}
    </div>
  );
}
