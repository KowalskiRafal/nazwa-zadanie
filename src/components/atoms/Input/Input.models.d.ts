export interface InputType {
  changed: (e) => void;
  type: string;
  name: string;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
  secondName?: string;
  pattern?: string;
  secondPattern?: string;
  value?: string;
  id?: string;
}
