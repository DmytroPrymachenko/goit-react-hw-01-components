import styled from 'styled-components';

export const ProfileDiv = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border-radius: 10px;
  background-color: #8fa6a6;
  margin: 50px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  display: block;

  width: 100px;
  background-color: white;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 22px;
`;
export const Tag = styled.p`
  font-size: 16px;
  margin-top: 15px;
`;
export const Location = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 30px;
  align-items: flex-start;
  
  
`;