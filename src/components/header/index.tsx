import { DivForm, DivIcons, HeaderBg, HeaderBox, HeaderStyled } from "./style"
import logo from "../../img/BurguerKenzieLogo.svg"
import { useContext, useState } from "react"
import searchIcon from "../../img/interroga.svg"
import cartIcon from "../../img/cartIcon.svg"
import logoutIcon from "../../img/logoutIcon.svg"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cartContext"
import { UserContext } from "../../contexts/userContext"

const Header = ( ) => {

    const { setModalState, modalState } = useContext(CartContext)

    const { setSearchValue } = useContext(UserContext)

    const [searchTyped, setSearchTyped] = useState("")

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("@token")
        navigate("/")
    }

    const handleModal = () => {
        setModalState(!modalState)
    }

    const search = (e: any)=> {
        e.preventDefault()
        setSearchValue(searchTyped)
    }

    return (
        <HeaderBg>
            <HeaderBox>
                <HeaderStyled>
                    <img src={logo} alt="Burguer Kenzie" />
                    <DivForm>
                        <form
                        onSubmit={search}>
                            <input 
                            type="text" 
                            placeholder="Digitar Pesquisa"
                            onChange={(e) => setSearchTyped(e.target.value)} />
                            <button 
                            type="submit"
                            className="primary-button"
                            ><img src={searchIcon} alt="Pesquisar" />
                            </button>
                        </form>
                        <DivIcons>
                            <img 
                            src={cartIcon} 
                            alt="Carrinho"
                            onClick={handleModal} />
                            <img 
                            src={logoutIcon} 
                            alt="Sair"
                            onClick={logout} />
                        </DivIcons>
                    </DivForm>
                </HeaderStyled>
            </HeaderBox>
        </HeaderBg>
    )
}

export { Header }