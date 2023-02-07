import styled from "styled-components";

export const ProductDisplay = styled.ul`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;    
    gap: 64px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 32px;

    @media (max-width: 750px){
            overflow-x: scroll;
            flex-wrap: nowrap;
    }

    li {
        width: 100%;
        max-width: 300px;
        min-width: 300px;
        list-style: none;
        border: 2px solid var(--color-primary);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        div {
            margin: 26px 0 23px 21px;
            display: flex;
            flex-direction: column;
            gap: 14px;

            h2 {
                font-size: 18px;
                font-weight: 700;
                color: var(--grey-600);
            }

            small {
                font-size: 12px;
                font-weight: 400;
                color: var(--grey-300);
            }

            p {
                font-size: 14px;
                font-weight: 600;
                color: var(--color-primary);
            }

            button {
                font-size: 14px;
                font-weight: 600;
                color: var(--grey-0);
                background: var(--color-primary);
                border: 2px solid var(--color-primary);
                border-radius: 8px;
                padding: 11px 20px;
                width: 100%;
                max-width: 120px;
            }

            button:hover {
                cursor: pointer;
                background: #93D7AF;
                border: 2px solid #93D7AF;
            }
        }

        img {
            width: 100%;
            max-width: 180px;
        }

        figure {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--grey-0);
        }

    }
`