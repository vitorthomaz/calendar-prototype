import React, { FC, ChangeEvent } from 'react';

import { Container, Label, Input } from './styles';

interface InputProps {
  placeholder?: string;
  required?: boolean;
  setValue: (arg1: string) => void;
  maxLength?: number;
}

const InputField: FC<InputProps> = ({
  children,
  placeholder,
  required,
  setValue,
  maxLength
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typed = event.target.value;
    setValue(typed);
  };

  return (
    <Container>
      <Label>
        {children}
        <Input
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </Label>
    </Container>
  );
};

export default InputField;
