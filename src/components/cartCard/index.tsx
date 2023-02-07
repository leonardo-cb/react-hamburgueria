import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { iProductList } from "../../contexts/userContext"
import trashIcon from "../../img/trashIcon.svg"
import { ButtonDisplayless, StyledCartCard } from "./styled"

interface iCartCardProps {
    product: iProductList;
}

export const CartCard = ( {product}: iCartCardProps ) => {

    const { 
        cartProductsNumber, 
        removeOneFromCart,
        addOneToCart, 
        removeThisItemFromCart } 
        = useContext(CartContext)

    const filterQuantity = cartProductsNumber.filter(element => element.name === product.name)
    
    return (
            <StyledCartCard>
                <figure>
                    <img src={product.img} alt={product.name} />
                </figure>
                <div>
                    <h2>{product.name}</h2>
                    <section>
                        <button
                        onClick={() => removeOneFromCart(product)}>-</button>
                        <h3>{filterQuantity.length}</h3>
                        <button
                        onClick={() => addOneToCart(product)}>+</button>
                    </section>
                </div>
                <ButtonDisplayless
                onClick={() => removeThisItemFromCart(product)}>
                    <img src={trashIcon} alt="Apagar" />
                </ButtonDisplayless>
            </StyledCartCard>
    )
}