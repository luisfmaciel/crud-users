import { StyledButton } from "./styles";

interface ButtonProps {
  type: 'button' | 'submit' | "reset";
  children: React.ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  return (
    <StyledButton type={type} >{children}</StyledButton>
  );
}
