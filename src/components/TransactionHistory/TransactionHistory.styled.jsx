import styled from 'styled-components';

export const TransactionTable = styled.table`
  border: 1px solid black;
`;
export const HeadLine = styled.thead`
  font-size: 20px;
`;
export const Tr = styled.tr`
  padding: 15px;
  background-color: ${props => props.$color};
`;
export const Th = styled.th`
  background-color: #abb2fe;
  padding: 15px 50px;
`;
export const Tbody = styled.tbody`
  font-size: 18px;
`;

export const Td = styled.td`

  border: 1px solid black;
`;