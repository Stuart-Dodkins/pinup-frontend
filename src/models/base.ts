export interface Base {
  id: string;
  dateCreated: string;
}

export type BaseFormProps<T> = {
  form?: T;
  onSubmit?: () => void;
};
