import { Select, SelectProps, FormLabel, FormControl } from '@chakra-ui/react';
import { Control, Controller, FieldError, Path } from 'react-hook-form';
import { AppColors } from '../../../theme';

export type SelectOption = {
  id: string;
  name: string;
};

export interface AppSelectProps<T extends {}> extends SelectProps {
  options: SelectOption[];
  name: Path<T>;
  error?: FieldError;
  control: Control<T>;
  label?: string;
  placeholder?: string;
}

export const AppSelect = <T extends {}>({
  options,
  name,
  error,
  control,
  label,
  placeholder,
}: AppSelectProps<T>) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
          >
            {options.map((item, index) => (
              <option key={`${item.name}-${index}`} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        )}
      />
      {error && <div style={{ color: 'red' }}>{error?.message}</div>}
    </FormControl>
  );
};
