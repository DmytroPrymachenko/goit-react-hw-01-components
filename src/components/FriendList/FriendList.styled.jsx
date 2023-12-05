import styled from 'styled-components';

export const FriendListItem = styled.ul`
 display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
background: var(--CLOUD, #f4f4fd);
flex-direction: column;
gap: 20px;
`;


export const FriendItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
border: 1px solid var(--LIGHT-SLATE, #8E8F99);
padding: 10px;
    width: 300px;
  
`;

export const StatusColor = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 20px;
    height: 20px;
    border-radius: 10px;

  
`;