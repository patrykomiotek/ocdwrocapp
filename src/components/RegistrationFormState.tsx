import { useState, type ChangeEventHandler, type FormEventHandler } from 'react';
import { Text, Button, Input, Heading } from '../ui';

export function RegistrationFormState() {
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
      <Heading>Registration form (state)</Heading>
      <Text>
        E-mail: {email}, password: {password}
      </Text>
      <form onSubmit={handleSubmit}>
        <Input label="E-mail" type="email" name="email" onChange={handleChange} />
        <Input label="Password" type="password" name="password" onChange={handleChange} />
        <Input label="Language" name="language" onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
