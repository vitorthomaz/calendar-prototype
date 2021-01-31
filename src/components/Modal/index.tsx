import React, { FC } from 'react';

import { Close } from '../../assets/icons';

import { Background, Container, Header, Button } from './styles';

interface ModalProps {
  day: Date;
  isVisible: boolean;
  setIsVisible: (arg1: boolean) => void;
}

const Modal: FC<ModalProps> = ({ day, isVisible, setIsVisible }) => {
  return (
    <Background isVisible={isVisible}>
      <Container>
        <Header>
          <Button onClick={() => setIsVisible(false)}>
            <Close />
          </Button>
        </Header>
        <p>The day is {day.toISOString()}</p>
      </Container>
    </Background>
  );
};

export default Modal;
