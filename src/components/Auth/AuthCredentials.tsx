import { Button, Heading, Text } from '@/ui';
import { useAuthContext } from './AuthContext';

export function AuthCredentials() {
  const context = useAuthContext();
  return (
    <div>
      <Heading variant="h3">AuthCredentials</Heading>
      <Text>Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</Text>
      <Button onClick={() => context.toggleLoggedIn()}>Toggle</Button>
    </div>
  );
}
