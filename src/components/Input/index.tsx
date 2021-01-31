import React, { FC, ReactNode, ChangeEvent } from 'react';

import { Container, Label, Input } from './styles';

interface InputProps {
  setValue: (arg1: string) => void;
  maxLength?: number;
  children?: ReactNode;
}

const InputField: FC<InputProps> = ({ children, setValue, maxLength }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typed = event.target.value;
    setValue(typed);
  };

  return (
    <Container>
      <Label>
        {children}
        <Input maxLength={maxLength} onChange={onChange} />
      </Label>
    </Container>
  );
};

export default InputField;
