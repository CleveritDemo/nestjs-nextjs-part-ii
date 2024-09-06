import { useForm } from 'react-hook-form';

type FormData = {
  // Define your form fields here
};

export const useFormValidation = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission here
  };

  return {
    register,
    handleSubmit,
    formState,
    onSubmit,
  };
};