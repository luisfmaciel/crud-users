import { createGlobalStyle } from 'styled-components';

interface Props {
    theme: {
        colors: {
            background: string;
            gray: string;
        };
    };
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background-color: ${({ theme }: Props) => theme.colors.background};
        color: ${({ theme }) => theme.colors.gray[900]};
    }

    button {
        cursor: pointer;
    }
`;