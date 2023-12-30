import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
    }

   body {
    background-color: ${(props) => props.theme["base-background"]}    
   }
`;
