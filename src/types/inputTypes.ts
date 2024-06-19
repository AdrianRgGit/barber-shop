export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface TextFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: any;
  required?: boolean;
}
