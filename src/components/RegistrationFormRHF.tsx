import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Input } from '../ui';
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
      <h1>Registration form (RHF)</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register('email')} label="E-mail" type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input {...register('password')} label="Password" type="password" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <Input {...register('language')} label="Language" />
        {errors.language && <p className="text-red-500">{errors.language.message}</p>}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
