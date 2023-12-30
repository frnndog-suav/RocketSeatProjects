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

   :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
   }

   body {
    background-color: ${(props) => props.theme["base-background"]}    
   }
`;
