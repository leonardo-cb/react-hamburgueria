import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    inset: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalBoxStyled = styled.div`
    width: 100%;
    max-width: 500px;
    min-width: 200px;
    margin: 0 15px;

    section {
        background-color: var(--grey-0);
        border: 1px solid var(--grey-0);
        border-radius: 0px 0px 5px 5px;

        h2{
            font-size: 18px;
            font-weight: 700;
            color: var(--grey-600);
        }

        p {
            font-size: 14px;
            color: var(--grey-300);
        }

        div {
            background-color: var(--grey-0);
            flex-direction: column;
            height: 100%;
            min-height: 250px;
            justify-content: center;
            gap: 20px;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            figure {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--grey-0);
            }

        }

    }

    ul {
        background-color: var(--grey-0);
        border: 1px solid var(--grey-0);
        gap: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 357px;
        overflow-y: auto;
    }

`

export const ModalHeader = styled.div`

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--color-primary);
        padding: 13px 22px;
        border-radius: 5px 5px 0px 0px;

        h2 {
            font-size: 18px;
            font-weight: 700;
            color: var(--grey-0)
        }

        button {
            border: none;
            background-color: transparent;
            color: var(--grey-0)   
        }

        button:hover {
            cursor: pointer;
        }
`

export const DivPlaceHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

export const DivPrices = styled.div`
    background-color: var(--grey-0);
    border: 1px solid var(--grey-0);
    border-radius: 0px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-width: 200px;
    border-top: 1px solid var(--grey-100);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 20px 0;
    }

    button {
        width: 90%;
        padding: 20px 168px;
        border: 2px solid var(--grey-100);
        border-radius: 8px;
        background-color: var(--grey-100);
        color: var(--grey-300);
        margin-bottom: 20px;
    }

    button:hover{
        cursor: pointer;
        background-color: var(--color-primary);
        color: var(--grey-0)
    }
`