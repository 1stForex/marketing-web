export interface CustomInputFieldProps {
  placeholder?: string;
  icon?: string;
  label?: string;
  width?: string;
  type?: string;
  padding?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  borderRadius?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
