import { useContext } from "react"
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { CartContext } from "../../contexts/cartContext"
import { UserContext } from "../../contexts/userContext"
import { ProductDisplay } from "./styled"

export const ShopPage = () => {

    const { modalState } = useContext(CartContext)

    const { toRender } = useContext(UserContext)

    const { addToCart } = useContext(CartContext)

    return (
            <>
                {modalState && <Modal/>}
                <Header />
                <ProductDisplay>
                    {toRender().map((product) => (
                        <li key={product.id}>
                                    <figure>
                                        <img src={product.img} alt={product.name} />
                                    </figure>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <small>{product.category}</small>
                                        <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
                                        <button
                                        onClick={() => addToCart(product)}>Adicionar</button>
                                    </div>
                                </li>)
                    )}
                </ProductDisplay>
            </>
    )
}