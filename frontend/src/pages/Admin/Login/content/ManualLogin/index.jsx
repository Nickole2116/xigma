import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { AuthButton, AuthInput, SubmitButton } from '@/pages/Shared';
import { ManualLoginSchema } from '@/validations/ManualLogin.schema';
import { useTranslation } from 'react-i18next'

import { login } from "@/services/modules/admin.service";



export const ManualLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ManualLoginSchema),
  });

  const username = watch('username');
  
  const onSubmit = async (formData) => {
    try {
      const res = await login(formData);
      if(res.status === 200){
        localStorage.setItem('ACCESS_TOKEN', res.token);
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error("login failed:", err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <AuthInput
        type="text"
        InternalLabel={t("user_code")}
        placeholder="e.g 17876"
        Error={errors.username?.message}
        {...register('username')}
      />

      <AuthInput
        type="password"
        isPassword={true}
        InternalLabel={t("access_key")}
        placeholder="e.g xxxxxx xx xxxx"
        Error={errors.access_key?.message}
        {...register('access_key')}
      />
      {/*<strong>{username || '-'}</strong>*/}

      <SubmitButton type="submit" style={{ marginTop: '1rem' }} isLoading={false}>{t('proceed_login')}</SubmitButton>
    </form>
  );
};

export default ManualLogin;
