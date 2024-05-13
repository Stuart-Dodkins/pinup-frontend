import { Stack } from '@chakra-ui/react';
import { AppInput } from '../app/app-input/app-input';
import { FaSearch } from 'react-icons/fa';
import AppButton from '../app/app-button/app-button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BaseFormProps } from '../../models/base';
import { AppSelect } from '../app/app-select/app-select';

interface ServiceFinderFormData {
  location: string;
  companyName?: string;
  service: string;
}

export type ServiceFinderFormProps<T> = {
  form?: ServiceFinderFormData;
} & BaseFormProps<T>;

const dataSchema = yup.object({
  location: yup.string().required('Field is required'),
  companyName: yup.string(),
  service: yup.string().required('Field is required'),
});

const defaultValues = {
  location: '',
  companyName: '',
  service: '',
};

const ServiceFinderForm: React.FC<
  ServiceFinderFormProps<ServiceFinderFormData>
> = ({ form, onSubmit }) => {
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ServiceFinderFormData>({
    defaultValues: form || defaultValues,
    resolver: yupResolver(dataSchema),
  });

  const options = [
    {
      id: '1',
      name: 'Test one',
    },
    {
      id: '2',
      name: 'Test two',
    },
    {
      id: '3',
      name: 'Test three',
    },
  ];

  return (
    <Stack spacing={4} p={4} rounded={'2xl'} boxShadow={'lg'} w={'100%'}>
      <AppInput<ServiceFinderFormData>
        control={control}
        label='Location'
        error={errors.location}
        name='location'
      />
      <AppInput<ServiceFinderFormData>
        control={control}
        label='Company Name'
        error={errors.location}
        name='companyName'
      />
      <AppSelect<ServiceFinderFormData>
        name={'service'}
        control={control}
        error={errors.location}
        label='Service'
        options={options}
      />
      <AppButton
        rightIcon={<FaSearch />}
        onClick={handleSubmit(onSubmit)}
        isDisabled={!isValid}
      >
        Search
      </AppButton>
    </Stack>
  );
};

export default ServiceFinderForm;
