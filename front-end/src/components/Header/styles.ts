import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;