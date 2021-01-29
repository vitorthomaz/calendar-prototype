import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;

  grid-gap: 1px;
  grid-template-columns: repeat(7, 80px);
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
  background: ${props => props.theme.colors.clearBlue};
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayCard = styled.div`
  grid-area: 'day';
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
