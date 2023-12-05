import { TransactionTable, HeadLine, Tr, Th, Tbody, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <HeadLine>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </HeadLine>

      <Tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <Tr key={id} $color={idx % 2 === 0 ? 'grey' : 'teal'}>
            <Td $color={1}>{type}</Td>
            <Td $color={1}>{amount}</Td>
            <Td $color={1}>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
};