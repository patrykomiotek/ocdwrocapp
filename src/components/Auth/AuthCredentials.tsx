import { useContext } from 'react';
import { Heading, Text } from '@/ui';
import { AuthContext } from './AuthContext';

export function AuthCredentials() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Heading variant="h3">AuthCredentials</Heading>
      <Text>Is user logged in? {isLoggedIn ? 'YES' : 'NO'}</Text>
    </div>
  );
}
