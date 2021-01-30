import React, { FC, useState, useCallback } from 'react';

import { Container, DateIndicator, Content } from './styles';
import theme from '../../styles/theme';

interface CalendarDayProps {
  day: Date;
}

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
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

  return (
    <Container background={getBackground(day)}>
      <DateIndicator color={getFontColor(day)}>
        {day.getUTCDate()}
      </DateIndicator>
      <Content></Content>
    </Container>
  );
};

export default CalendarDay;
