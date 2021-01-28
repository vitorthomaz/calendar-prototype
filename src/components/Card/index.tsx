import React, { FC, ReactNode } from 'react';

import { Container } from './styles';

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
