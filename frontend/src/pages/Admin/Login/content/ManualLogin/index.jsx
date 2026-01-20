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
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <AuthInput
        type="text"
        InternalLabel="User Code"
        placeholder="e.g 17876"
        Error={errors.username?.message}
        {...register('username')}
      />

      <AuthInput
        type="password"
        isPassword={true}
        InternalLabel="Access Key"
        placeholder="e.g xxxxxx xx xxxx"
        Error={errors.access_key?.message}
        {...register('access_key')}
      />
      {/*<strong>{username || '-'}</strong>*/}

      <SubmitButton type="submit" style={{ marginTop: '1rem' }} isLoading={false}>Proceed to Login</SubmitButton>
    </form>
  );
};

export default ManualLogin;
