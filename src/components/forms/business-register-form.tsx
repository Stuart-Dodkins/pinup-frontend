import { Flex, Stack, Text } from '@chakra-ui/react';
import { AppInput } from '../app/app-input/app-input';
import AppButton from '../app/app-button/app-button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BaseFormProps } from '../../models/base';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppColors } from '../../theme';
import AppCheckbox from '../app/app-checkbox/app-checkbox';
import { useState } from 'react';

interface RegisterFormData {
  name: string;
  password: string;
  login?: () => void;
}

const loginDataSchema = yup.object({
  email: yup.string().required('Field is required'),
  password: yup.string().required('Field is required'),
});

const defaultValues: RegisterFormData = {
  name: '',
  password: '',
};

type RegisterFormProps<T> = {
  form?: RegisterFormData;
  login?: () => void;
} & BaseFormProps<T>;
