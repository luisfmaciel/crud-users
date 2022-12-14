import React from "react"
import { Container } from "./styles";

interface FormGroupProps {
  children: React.ReactNode;
  error: string | undefined;
}

const FormGroup = ({ children, error }: FormGroupProps) => {
  return (
    <Container>
      <div className="form-item">
        {children}
      </div>

      {error && <small>{error}</small>}
    </Container>
  )
}

export default FormGroup;
