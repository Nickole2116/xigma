import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthButton, AuthInput, SubmitButton } from '@/pages/Shared';
import { manualLoginSchema } from '@/validations/manualLogin.schema';

export const ManualLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(manualLoginSchema),
  });

  const username = watch('username');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        label="Username"
        placeholder="Enter Permission's Username"
        error={errors.username?.message}
        {...register('username')}
      />

      {/* 👇 live preview */}
      <p style={{ marginTop: '8px', fontSize: '12px' }}>
        Current input: <strong>{username || '-'}</strong>
      </p>

      <SubmitButton type="submit">Login</SubmitButton>
    </form>
  );
};

export default ManualLogin;
