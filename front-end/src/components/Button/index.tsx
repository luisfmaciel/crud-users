import { StyledButton } from "./styles";

interface ButtonProps {
  type: 'button' | 'submit' | "reset";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <StyledButton type={type} >{children}</StyledButton>
  );
}

export default Button;
