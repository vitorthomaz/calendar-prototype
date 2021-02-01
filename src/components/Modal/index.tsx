import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Close } from '../../assets/icons';
import { ReminderForm, DateDetails } from '../../components';
import { IStore } from '../../store';
import { closeModal } from '../../store/actions/infos';

import { Background, Container, Content, Header, CloseButton } from './styles';

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  const dispatch = useDispatch();
  const infos = useSelector((store: IStore) => store.infos);
  const selectedDay = new Date(infos.day);
  const isVisible = infos.isVisible;

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <Background isVisible={isVisible}>
      <Container>
        <Header>
          <CloseButton onClick={close}>
            <Close />
          </CloseButton>
        </Header>
        <Content>
          <DateDetails datetime={selectedDay} />
          {isVisible && <ReminderForm extraActionsOnSubmit={close} />}
        </Content>
      </Container>
    </Background>
  );
};

export default Modal;
