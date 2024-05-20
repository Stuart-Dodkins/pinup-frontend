export type BaseFormProps<T> = {
  form?: T;
  onSubmit: (data: T) => void;
};
