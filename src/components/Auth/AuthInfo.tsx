// AuthInfo.tsx
import { Heading } from '@/ui';
import { AuthCredentials } from './AuthCredentials';

export function AuthInfo() {
  return (
    <div>
      <Heading variant="h3">AuthCredentials</Heading>
      <AuthCredentials />
    </div>
  );
}
