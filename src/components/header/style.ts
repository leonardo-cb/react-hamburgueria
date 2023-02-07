import styled from "styled-components"

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 1143px){
            flex-direction: column;
            gap: 20px
        }

    form {
        background-color: #ffffff;
        padding: 7px 30px;
        border: 2px solid var(--grey-0);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            padding: 11px 20px;
            background: var(--color-primary);
            border: 2px solid var(--color-primary);
            border-radius: 8px;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
        }

        button:hover{
            cursor: pointer;
        }
    }

    input {
        border: none;
        background-color: transparent;
        outline: none;
    }
`

export const HeaderBox = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
`

export const HeaderBg = styled.div`
    background-color : var(--grey-0);
    padding: 15px 90px;
    width: 100vw;
`

export const DivIcons = styled.div`
    display: flex;
    gap: 20px;
`

export const DivForm = styled.div`

    display: flex;
    align-items: center;
    gap: 38px;

    @media (max-width: 1143px){
        flex-direction: column-reverse;
    }
        
    img:hover{
        cursor: pointer;
    }
    
`