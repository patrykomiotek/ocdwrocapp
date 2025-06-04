// AuthInfo.tsx
import { Heading } from '@/ui';
import { AuthCredentials } from './AuthCredentials';

export function AuthInfo() {
  return (
    <div>
      <Heading variant="h2">AuthInfo</Heading>
      <AuthCredentials />
    </div>
  );
}
