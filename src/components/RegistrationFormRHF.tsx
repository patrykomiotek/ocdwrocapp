import { useState, type ChangeEventHandler, type FormEventHandler } from 'react';
import { Text, Button } from '../ui';

export function RegistrationFormRHF() {
  // const emailFieldRef = useRef<HTMLInputElement>(null);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [language, setLanguage] = useState("");
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    language: '',
  });

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log({ formState });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // event.targe.name
    // event.target.value
    const name = event.target.name;
    const value = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { email, password } = formState;

  return (
    <div>
      <h1>Registration form</h1>
      <Text>
        E-mail: {email}, password: {password}
      </Text>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" name="language" onChange={handleChange} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
