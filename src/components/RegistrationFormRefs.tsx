import { useRef, type FormEventHandler } from 'react';
import { Button } from '../ui';

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
      <h1>Registration form (refs)</h1>
      <p ref={infoRef}></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            ref={emailFieldRef}
            id="email"
            name="email"
            type="email"
            className="outline rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordFieldRef}
            id="password"
            name="password"
            type="password"
            className="outline rounded-md"
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input
            ref={languageFieldRef}
            id="language"
            name="language"
            className="outline rounded-md"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
