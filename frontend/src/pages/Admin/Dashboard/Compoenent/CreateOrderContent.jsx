import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ModalButton, ModalInput } from '@/pages/Shared';
import { CreateOrderSchema } from '@/validations/CreateOrder.schema';
import { useTranslation } from 'react-i18next'

import { createOrder, verifyToken } from "@/services/modules/admin.service";



export const CreateOrderContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateOrderSchema),
  });

  const verifyPageToken = async () => {
    const res = await verifyToken({ token: localStorage.getItem('ACCESS_TOKEN') });
    if (res.status === 200) {
        console.log(res);
      setUser(res.admin);
      navigate('/admin/dashboard');
    } else {
      console.log(res);
      toast.error(res.message);
    }
    };
    useEffect(() => {
    verifyPageToken();
    }, []);

  
  const onSubmit = async (formData) => {
    try {
      formData.admin_id = user?.id;
      const res = await createOrder(formData);

      console.log(res);
      
    } catch (err) {
      console.error("login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
      <ModalInput
        type="text"
        InternalLabel={t("comment")}
        placeholder="e.g This is a comment"
        Error={errors.username?.message}
        {...register('comments')}
      />

      
      {/*<strong>{username || '-'}</strong>*/}

      <ModalButton type="submit" style={{ marginTop: '1rem' }} isLoading={false}>{t('proceed_login')}</ModalButton>
    </form>
  );
};

export default CreateOrderContent;
