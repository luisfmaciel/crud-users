import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;
  
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.main};
  
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`;