import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --gray-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --Negative: #E60000;
        --Warning: #FFCD07;
        --Sucess: #168821;
        --Information: #155BCB;

        font-size: 62.5%;

        --font-size-38: 3.8rem;
        --font-size-28: 2.8rem;
        --font-size-26: 2.6rem;
        --font-size-24: 2.4rem;
        --font-size-22: 2.2rem;
        --font-size-20: 2rem;
        --font-size-18: 1.8rem;
        --font-size-16: 1.6rem;
        --font-size-14: 1.4rem;
        --font-size-12: 1.2rem;

        --font-weigth-800: 800;
        --font-weigth-700: 700;
        --font-weigth-600: 600;
        --font-weigth-500: 500;
        --font-weigth-400: 400;

        --border-radius: 0.8rem;

        --font-family-inter: "Inter", sans-serife;
    } 
    
    button{
        cursor: pointer;
    }
`;

export const Reset = createGlobalStyle` 
*{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;
