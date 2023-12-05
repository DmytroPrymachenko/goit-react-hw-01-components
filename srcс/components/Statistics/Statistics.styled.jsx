import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #BEF3FA;
  
`;
export const TitleH2 = styled.h2`
  

  text-align: center;
  
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 15px;
   padding: 15px;
   
  
`;
export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
border: 1px solid var(--LIGHT-SLATE, #8E8F99);
padding: 10px;
  
`;