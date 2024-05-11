import { Stack, Text } from '@chakra-ui/react';
import { AppInput } from '../app/app-input/app-input';
import AppButton from '../app/app-button/app-button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BaseFormProps } from '../../models/base';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppColors } from '../../theme';

interface RegisterFormData {
  email: string;
  password: string;
  login?: () => void;
}

const loginDataSchema = yup.object({
  email: yup.string().required('Field is required'),
  password: yup.string().required('Field is required'),
});

const defaultValues: RegisterFormData = {
  email: '',
  password: '',
};

type RegisterFormProps<T> = {
  form?: RegisterFormData;
  login?: () => void;
} & BaseFormProps<T>;

const RegisterForm: React.FC<RegisterFormProps<RegisterFormData>> = ({
  form,
  login,
  onSubmit,
}) => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterFormData>({
    defaultValues: form || defaultValues,
    resolver: yupResolver(loginDataSchema),
  });

  const handleFormSubmit = () => {
    const formData = getValues();
    console.log('FORMDATA', formData);
    //make sure to save the user to store
  };

  return (
    <Stack spacing={4} padding={4} rounded={'md'} boxShadow={'lg'}>
      <AppInput<RegisterFormData>
        control={control}
        error={errors.email}
        name='email'
        label='Email'
      />
      <AppInput<RegisterFormData>
        control={control}
        error={errors.password}
        name='password'
        label='Password'
        inputType='password'
      />
      <AppButton onClick={handleFormSubmit} isDisabled={!isValid}>
        Register
      </AppButton>
      <Text
        fontSize={'12px'}
        textDecor={'underline'}
        color={AppColors.secondary}
        onClick={login}
        _hover={{
          cursor: 'pointer',
        }}
      >
        Already a user?
      </Text>
    </Stack>
  );
};

export default RegisterForm;
