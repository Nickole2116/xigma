import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ModalButton, ModalInput } from '@/pages/Shared';
import { CreateProjectSchema } from '@/validations/CreateProject.schema';
import { useTranslation } from 'react-i18next'

import { createProject, verifyToken } from "@/services/modules/admin.service";



export const CreateProjectContent = ({ order, setCurrentOrder }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateProjectSchema),
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

  
    const onSubmit = async (data) => {
      console.log(data);
      try {
        const formData = new FormData();
    
        formData.append('project_name', data.project_name);
        formData.append('admin_id', user?.id);
        formData.append('order_ref', order?.ref_ticket);
    
        if (data.attachment && data.attachment.length > 0) {
          formData.append('attachment', data.attachment[0]);
        }
    
        const res = await createProject(formData);
        console.log(res);
      } catch (err) {
        console.error("create project failed:", err);
      }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
      <input
        type="file"
        accept="image/*"
        {...register('attachment')}
      />
      <ModalInput
        type="text"
        InternalLabel={t("project_name")}
        placeholder="e.g Maxwell"
        Error={errors.project_name?.message}
        {...register('project_name')}
      />

      {order && (
        <ModalInput
          type="text"
          InternalLabel={t("order")}
          placeholder="e.g 1"
          value={order.ref_ticket}
          disabled
        />
      )}
      <ModalButton type="submit" style={{ marginTop: '1rem' }} isLoading={false}>{t('proceed_login')}</ModalButton>
    </form>
  );
};

export default CreateProjectContent;
