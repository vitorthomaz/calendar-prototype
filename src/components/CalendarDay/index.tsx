import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setDay } from '../../store/actions/infos';

import { AddCircle } from '../../assets/icons';
import { ReminderList, Modal } from '../../components';

import { Container, DateIndicator, Content, Button } from './styles';
import theme from '../../styles/theme';
interface CalendarDayProps {
  day: Date;
}

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = (visibility: boolean) => setIsVisible(visibility);

  const openModal = () => {
    const selectedDay = day.toISOString();
    dispatch(setDay(selectedDay));
    setIsVisible(true);
  };

  return (
    <Container background={getBackground(day)}>
      <Modal isVisible={isVisible} setIsVisible={changeVisibility} />
      <DateIndicator color={getFontColor(day)}>
        {day.getUTCDate()}

        <Button onClick={openModal}>
          <AddCircle />
        </Button>
      </DateIndicator>
      <Content>
        <ReminderList selectedDatetime={day} />
      </Content>
    </Container>
  );
};

const getBackground = (day: Date) => {
  let background = '#fff';
  const weekday = day.getUTCDay();

  if (weekday === 0 || weekday === 6) {
    background = theme.colors.clearGray;
  }

  return background;
};

const getFontColor = (day: Date) => {
  let color = '#000';
  const weekday = day.getUTCDay();

  if (weekday === 0 || weekday === 6) {
    color = theme.colors.weakBlue;
  }

  return color;
};

export default CalendarDay;
