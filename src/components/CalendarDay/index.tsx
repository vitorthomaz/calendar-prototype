import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setDay, openModal as showModal } from '../../store/actions/infos';

import { AddCircle } from '../../assets/icons';
import { ReminderList } from '../../components';

import { Container, DateIndicator, Content, Button } from './styles';
import theme from '../../styles/theme';
interface CalendarDayProps {
  day: Date;
}

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    const selectedDay = day.toISOString();
    dispatch(setDay(selectedDay));
    dispatch(showModal());
  };

  return (
    <Container background={getBackground(day)}>
      <DateIndicator color={getFontColor(day)}>
        {day.getDate()}

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
  const weekday = day.getDay();

  if (weekday === 0 || weekday === 6) {
    background = theme.colors.clearGray;
  }

  return background;
};

const getFontColor = (day: Date) => {
  let color = '#000';
  const weekday = day.getDay();

  if (weekday === 0 || weekday === 6) {
    color = theme.colors.weakBlue;
  }

  return color;
};

export default CalendarDay;
