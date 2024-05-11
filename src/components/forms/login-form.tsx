import { Box, Stack, Text } from '@chakra-ui/react';
import { AppInput } from '../app/app-input/app-input';
import AppButton from '../app/app-button/app-button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BaseFormProps } from '../../models/base';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppColors } from '../../theme';
import { useState } from 'react';

export interface LoginFormData {
  email: string;
  password: string;
  register?: () => void;
}

export const loginDataSchema = yup.object({
  email: yup.string().required('Field is required'),
  password: yup.string().required('Field is required'),
});

const defaultValues: LoginFormData = {
  email: '',
  password: '',
};

type LoginFormProps<T> = {
  form?: LoginFormData;
  register?: () => void;
} & BaseFormProps<T>;

export const LoginForm: React.FC<LoginFormProps<LoginFormData>> = ({
  form,
  register,
  onSubmit,
}) => {
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const {
    control,
    formState: { isValid, errors },
  } = useForm<LoginFormData>({
    defaultValues: form || defaultValues,
    resolver: yupResolver(loginDataSchema),
  });
  return (
    <Stack spacing={4} padding={4} rounded={'md'} boxShadow={'lg'}>
      <AppInput<LoginFormData>
        control={control}
        error={errors.email}
        name='email'
        label='Email'
      />
      <Box display={forgotPassword ? 'none' : 'block'}>
        <AppInput<LoginFormData>
          control={control}
          error={errors.password}
          name='password'
          label='Password'
          inputType='password'
        />
      </Box>
      <AppButton onClick={onSubmit} isDisabled={!isValid}>
        Login
      </AppButton>
      <Text
        fontSize={'12px'}
        textDecor={'underline'}
        onClick={() => setForgotPassword(true)}
        color={AppColors.secondary}
        _hover={{
          cursor: 'pointer',
        }}
      >
        Forgot Password?
      </Text>
    </Stack>
  );
};
