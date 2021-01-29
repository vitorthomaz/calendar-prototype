import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(7, 110px);
  grid-template-rows: 25px repeat(4, 1fr);
  grid-template-areas:
    'wdy wdy wdy wdy wdy wdy wdy'
    'day day day day day day day'
    'day day day day day day day'
    'day day day day day day day'
    'day day day day day day day'
    'day day day day day day day';
`;

export const WeekdayCard = styled.div`
  grid-area: 'wdy';
`;

export const DayCard = styled.div`
  grid-area: 'day';
`;
