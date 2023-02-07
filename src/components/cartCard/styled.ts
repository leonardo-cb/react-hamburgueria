import styled from "styled-components";

export const StyledCartCard = styled.li`
    display: flex;
    width: 100%;
    max-width: 420px;
    height: 100%;
    max-height: 100px;
    align-items: center;
    justify-content: flex-start;

    div{
        display: flex;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        flex-direction: column;

        h2 {
            font-size: 18px;
            font-weight: 700;
            color: var(--grey-600);
            width: 100%;
        }

        button {
            background-color: var(--grey-100);
            color: var(--color-secondary);
            border: none;
            padding: 7px;
            width: 30px;
        }

        button:hover{
            cursor: pointer;
        }

        h3 {
            background-color: var(--grey-0);
            color: black;
            font-size: 12px;
            width:25px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--grey-100);
        }

        section {
            display: flex;
        }
    }

    figure {
        width: 100%;
        max-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;

        img{
            width: 100%;
            object-fit: cover;
        }
    }
    
`

export const ButtonDisplayless = styled.button`
    background-color: transparent;
    border: none;

    :hover{
        cursor: pointer;
    }
`