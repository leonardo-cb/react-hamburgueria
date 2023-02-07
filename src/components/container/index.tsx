import { JsxElement } from "typescript"
import { StyledContainer } from "./styled"

interface iContainer {
    children: React.ReactNode;
}

export const Container = ( {children}: iContainer ) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}