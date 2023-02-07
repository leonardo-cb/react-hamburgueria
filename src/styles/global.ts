import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background-color: var(--color-grey-4);
        color: var(--color-grey-0)
    }

    ul::-webkit-scrollbar {
      width: 10px;
    }
  
    ul::-webkit-scrollbar-track {
        background: var(--grey3);
    }
  
    ul::-webkit-scrollbar-thumb {
    background-color: var(--color-primary); 
    border-radius: 10px;       
    }
`