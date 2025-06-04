import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Heading, Input } from '../ui';
import { validationSchema, type RegistrationDto } from './registrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export function RegistrationFormRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationDto>({
    resolver: zodResolver(validationSchema),
  });

  const submitHandler: SubmitHandler<RegistrationDto> = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <Heading>Registration form (RHF)</Heading>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register('email')} label="E-mail" type="email" error={errors.email} />
        <Input {...register('password')} label="Password" type="password" error={errors.password} />
        <Input {...register('language')} label="Language" error={errors.language} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
