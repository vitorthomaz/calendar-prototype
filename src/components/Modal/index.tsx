import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Close } from '../../assets/icons';
import { ReminderForm, DateDetails } from '../../components';
import { IStore } from '../../store';

import { Background, Container, Content, Header, CloseButton } from './styles';

interface ModalProps {
  isVisible: boolean;
  setIsVisible: (arg1: boolean) => void;
}

const Modal: FC<ModalProps> = ({ isVisible, setIsVisible }) => {
  const infos = useSelector((store: IStore) => store.infos);
  const selectedDay = new Date(infos.day);

  const closeModal = () => setIsVisible(false);

  return (
    <Background isVisible={isVisible}>
      <Container>
        <Header>
          <CloseButton onClick={closeModal}>
            <Close />
          </CloseButton>
        </Header>
        <Content>
          <DateDetails datetime={selectedDay} />
          {isVisible && <ReminderForm extraActionsOnSubmit={closeModal} />}
        </Content>
      </Container>
    </Background>
  );
};

export default Modal;
