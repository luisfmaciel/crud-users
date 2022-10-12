import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; // possível mudança
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

    strong {
        color: ${({ theme }) => theme.colors.gray[900]};
        font-size: 2rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const EmptyListText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.5rem;
`;