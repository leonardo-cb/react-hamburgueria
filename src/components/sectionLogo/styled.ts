import styled from "styled-components";

export const SectionLogoStyled = styled.section`
    max-width: 377px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 29px;

    div {
        display: flex;
        width: 100%;
        padding: 17px 14px;
        align-items: center;
        justify-content: space-between;
        gap: 19px;
        border: 1px solid var(--grey-100);
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        figure {
            background: rgba(39, 174, 96, 0.1);
            border-radius: 5px;
            padding: 18px;
        }

        p {
            font-size: 14px;
            font-weight: 600;
            color: var(--grey-300);
        }

        span {
            color: black;
        }
    }
`
export const LogoStyled = styled.img`
    max-width: 243px;
    width: 100%;
`

export const BallsStyled = styled.img`
    max-width: 181px;
    width: 100%;

    @media (max-width: 1000px){
        display: none;
    }
`