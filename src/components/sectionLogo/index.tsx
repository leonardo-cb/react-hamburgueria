import logo from "../../img/BurguerKenzieLogo.svg"
import bag from "../../img/shopping-bag.svg"
import balls from "../../img/grey-balls.svg"
import { BallsStyled, LogoStyled, SectionLogoStyled } from "./styled"

export const SectionLogo = () => {
    return (
        <SectionLogoStyled>
            <figure>
                <LogoStyled src={logo} alt="Burguer Kenzie" />
            </figure>
            <div>
                <figure>
                    <img src={bag} alt="Bolsa de compras" />
                </figure>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>
            <BallsStyled src={balls} alt="" />
        </SectionLogoStyled>
    )
}