import {
    Flex,
    FlexProps,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from '@chakra-ui/react';
  import {
    Control,
    Controller,
    FieldError,
    FieldValues,
    Path,
  } from 'react-hook-form';
  import { AppColors } from '../../../theme';
  
  export type AppInputType = 'text' | 'email' | 'password';
  export type AppInputVariants = 'outline' | 'filled' | 'flushed' | 'unstyled';
  
  export type AppInputProps<T extends FieldValues> = FlexProps & {
    control: Control<T>;
    name: Path<T>;
    error: FieldError | undefined;
    placeHolder?: string;
    label?: string;
    textArea?: boolean;
    inputType?: AppInputType;
    variant?: AppInputVariants;
  };
  
  export const AppInput = <T extends FieldValues>({
    control,
    name,
    error,
    placeHolder,
    label,
    textArea = false,
    inputType = 'text',
    variant = 'filled',
    ...props
  }: AppInputProps<T>) => {
    return (
      <Flex {...props}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormControl>
              <FormLabel fontWeight={'500'} fontSize={'14px'} color={AppColors.appTextColor}>
                {label}
              </FormLabel>
              {!textArea ? (
                <Input
                  type={inputType}
                  name={name}
                  placeholder={placeHolder}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  bgColor={'0,0,0'}
                  ref={ref}
                  rounded={'md'}
                />
              ) : (
                <Textarea
                  name={name}
                  placeholder={placeHolder}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                />
              )}
              {error && <div style={{ color: 'red' }}>{error?.message}</div>}
            </FormControl>
          )}
        />
      </Flex>
    );
  };