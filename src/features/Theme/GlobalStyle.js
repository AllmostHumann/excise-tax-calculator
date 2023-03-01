import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        word-break: break-word;
        transition: background 0.3s;
        padding: 115px 40px;
        background-color: ${({ theme }) => theme.colors.westar};
        letter-spacing: 0.05em;
    }
`;
