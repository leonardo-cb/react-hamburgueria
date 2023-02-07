import styled from "styled-components";

export const SectionBoxStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;

    @media (max-width: 1000px){
        flex-direction: column-reverse;
        gap: 14px;
    }
`