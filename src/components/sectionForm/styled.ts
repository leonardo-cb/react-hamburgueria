import styled from "styled-components";

export const StyledForm = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 26px 24px;
        border: 2px solid var(--grey-0);

        button {
            padding: 16px 0;
            border-radius: 8px;
            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
        }

        button:hover {
            cursor: pointer;
        }

        span {
            color: var(--color-secondary);
            margin-top: 9px;
            font-size: 12px;
        }
    }

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--grey-600);
    }

`

export const DivHeaderFormStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        width: fit-content;
    }

    a {
        width: fit-content;
        font-weight: 500;
        font-size: 14px;
        color: var(--grey-300);
    }
`

export const DivInputStyled = styled.div`

        display: flex;
        flex-direction: column;
        width: 100%;

        label {
            font-size: 12px;
            font-weight: 400;
            color: #999999;
        }

        input {
            padding: 21px 15px;
            border: 2px solid var(--grey-600);
            border-radius: 8px;
            width: 100%;
            color: var(--grey-600);
            font-size: 16px;
            font-weight: 400;
        }

`