import { SectionBoxStyled } from "./styled"

interface iSectionBox {
    children: React.ReactNode;
}

export const SectionBox = ( { children }: iSectionBox ) => {
    return ( 
            <SectionBoxStyled>
                {children}
            </SectionBoxStyled>
    )
}