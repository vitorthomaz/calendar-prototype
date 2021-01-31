import React, { FC, ChangeEvent } from 'react';

import { Container, Label, Select, Option } from './styles';

type OptionType = {
  value: string;
  displayed: string;
};

interface SelectFieldProps {
  options?: OptionType[];
  defaultValue?: string;
  setValue: (arg1: string) => void;
}

const SelectField: FC<SelectFieldProps> = ({
  options = Array.from(Array(24), (_, id) => ({
    displayed: `${id}`,
    value: `${id}`
  })),
  defaultValue,
  setValue,
  children
}) => {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setValue(value);
  };

  return (
    <Container>
      <Label>
        {children}
        <Select defaultValue={defaultValue} onChange={onSelect}>
          {options.map(({ displayed, value }, id) => {
            if (value === defaultValue) {
              return (
                <Option selected value={value} key={id}>
                  {displayed}
                </Option>
              );
            }

            return (
              <Option value={value} key={id}>
                {displayed}
              </Option>
            );
          })}
        </Select>
      </Label>
    </Container>
  );
};

export default SelectField;
