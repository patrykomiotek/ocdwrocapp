import { useAuthContext } from '@/components/Auth/AuthContext';
import { Heading, Text } from '@/ui';

export const HomePage = () => {
  const context = useAuthContext();

  return (
    <div>
      <Heading variant="h1">Hello from home</Heading>
      <Text>Is logged in: {context.isLoggedIn ? 'YES' : 'NO'}</Text>
    </div>
  );
};
