import { useRef, type FormEventHandler } from 'react';
import { Button, Heading, Input } from '../ui';

export function RegistrationFormRefs() {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);
  const infoRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log({
      email: emailFieldRef.current?.value || '',
      password: passwordFieldRef.current?.value || '',
      language: languageFieldRef.current?.value || '',
    });

    if (infoRef.current) {
      infoRef.current.textContent = `E-mail: ${emailFieldRef.current?.value}, Password: ${passwordFieldRef.current?.value}`;
    }
  };

  return (
    <div>
      <Heading>Registration form (refs)</Heading>
      <p ref={infoRef}></p>
      <form onSubmit={handleSubmit}>
        <Input ref={emailFieldRef} label="E-mail" type="email" />
        <Input ref={passwordFieldRef} label="Password" type="password" />
        <Input ref={languageFieldRef} label="Language" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
