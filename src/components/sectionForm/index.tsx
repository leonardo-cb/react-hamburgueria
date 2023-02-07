import { StyledForm } from "./styled"

interface iForm {
    children: React.ReactNode;
}

export const SectionForm = ( {children}: iForm ) => {
    return (
            <StyledForm>
                {children}
            </StyledForm>
    )
}