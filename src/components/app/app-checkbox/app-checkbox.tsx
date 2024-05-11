import { Checkbox, Flex, FlexProps, FormControl } from '@chakra-ui/react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

export type AppCheckboxProps<T extends FieldValues> = FlexProps & {
  name: Path<T>;
  error?: FieldError;
  control: Control<T>;
  checkboxLabel?: string;
};

const AppCheckbox = <T extends FieldValues>({
  name,
  error,
  control,
  checkboxLabel,
  ...props
}: AppCheckboxProps<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Flex {...props}>
            <Controller
              control={control}
              name={name}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormControl>
                  <Checkbox
                    defaultChecked={value}
                    onChange={(e) => onChange(e.currentTarget.checked)}
                    mt={'5px'}
                  >
                    {checkboxLabel}
                  </Checkbox>
                  {error && (
                    <div style={{ color: 'red' }}>{error?.message}</div>
                  )}
                </FormControl>
              )}
            />
          </Flex>
        )}
      />
    </>
  );
};

export default AppCheckbox;
