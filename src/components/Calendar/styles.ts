import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  margin: 24px;
  display: grid;

  grid-gap: 1px;
  grid-template-columns: repeat(7, minmax(80px, 240px));
  grid-template-rows: 48px repeat(6, 120px);
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
