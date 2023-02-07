import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { CartCard } from "../cartCard"
import { DivPlaceHolder, DivPrices, ModalBoxStyled, ModalHeader, ModalStyled } from "./styled"

export const Modal = () => {

    const { setModalState, modalState, cartProducts, clearCart, cartProductsNumber } = useContext(CartContext)
    
    const handleModal = () => {
        setModalState(!modalState)
    }

    return (
            <ModalStyled>
                <ModalBoxStyled>
                    <ModalHeader>
                        <h2>Carrinho de compras</h2>
                        <button
                        onClick={handleModal}>X</button>
                    </ModalHeader>
                    <ul>
                        {   
                            cartProducts.length > 0 ?
                            cartProducts.map((product, i) => {
                                return (
                                    <CartCard 
                                        product={product}
                                        key={i} />
                                )
                            })                            
                        :
                            <section>
                                <DivPlaceHolder>
                                    <h2>Sua sacola está vazia</h2>
                                    <p>Adicione itens</p>
                                </DivPlaceHolder>
                            </section>
                        }
                    </ul>
                        {cartProducts.length > 0 && 
                            <DivPrices>
                                <div>
                                    <h4>Total</h4>
                                    <h5>R$ {cartProductsNumber.reduce((acc, value) => {
                                        return acc + value.price
                                    }, 0).toFixed(2).replace(".", ",")}</h5>
                                </div>
                                <button onClick={clearCart}>Remover todos</button>
                            </DivPrices>}
                </ModalBoxStyled>
            </ModalStyled>
    )
}