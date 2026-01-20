import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthButton, AuthInput, SubmitButton } from '@/pages/Shared';
import { ManualLoginSchema } from '@/validations/ManualLogin.schema';

export const ManualLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ManualLoginSchema),
  });

  const username = watch('username');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        type="password"
        isPassword={true}
        InternalLabel="Username"
        placeholder="Enter Permission's Username"
        Error={errors.username?.message}
        {...register('username')}
      />
      {/*<strong>{username || '-'}</strong>*/}

      <SubmitButton type="submit">Login</SubmitButton>
    </form>
  );
};

export default ManualLogin;
