import { createContext, useState } from "react";
import { isConditionalExpression } from "typescript";
import { iProductList } from "./userContext";

interface iCartContextProps {
    children: React.ReactNode;
}

interface iCartContext {
    addToCart: (product: iProductList) => void;
    clearCart: () => void;
    removeOneFromCart: (product: iProductList) => void;
    addOneToCart: (product: iProductList) => void;
    removeThisItemFromCart: (product: iProductList) => void;
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    cartProducts: iProductList[]
    cartProductsNumber: iProductList[]
}

export const CartContext = createContext({} as iCartContext)

export const CartProvider = ( {children}: iCartContextProps ) => {

    const [ cartProducts, setCartProducts ] = useState<iProductList[]>([])

    const [ cartProductsNumber, setCartProductNumber ] = useState<iProductList[]>([])

    const [ modalState, setModalState ] = useState(false)

    const addToCart = (product: iProductList) => {

        const filter = cartProducts.find((element) => {
            return element.id === product.id
        }) 

        if(filter) {
            setCartProductNumber([...cartProductsNumber, product]) 
        } else {
            setCartProductNumber([...cartProductsNumber, product]) 
            setCartProducts([...cartProducts, product])
        }

    }

    const clearCart = () => {
        setCartProducts([])
        setCartProductNumber([])
    }

    const removeOneFromCart = (product :iProductList) => {

        const filter = cartProductsNumber.filter((element) => {
            return element.id === product.id
        }) 
        const reverseFilterDisplay = cartProducts.filter((element) => {
            return element.id != product.id
        }) 
        const reverseFilterNumber = cartProductsNumber.filter((element) => {
            return element.id != product.id
        }) 

        const findItem = cartProductsNumber.findIndex((element) => {
            return element.id === product.id
        })

        if(filter.length > 1){
            const newList = cartProductsNumber
            newList.splice(findItem, 1)
            setCartProductNumber([...newList])
        } else if (filter.length === 1) {
            setCartProducts([...reverseFilterDisplay])
            setCartProductNumber([...reverseFilterNumber])
        }
    }

    const addOneToCart = (product: iProductList) => {
        setCartProductNumber([...cartProductsNumber, product])
    }

    const removeThisItemFromCart = (product :iProductList) => {

        const reverseFilterDisplay = cartProducts.filter((element) => {
            return element.id != product.id
        }) 
        const reverseFilterNumber = cartProductsNumber.filter((element) => {
            return element.id != product.id
        }) 

        setCartProducts([...reverseFilterDisplay])
        setCartProductNumber([...reverseFilterNumber])
    }

    return (
            <CartContext.Provider value={{ 
                addToCart, 
                modalState, 
                setModalState,
                cartProducts,
                clearCart,
                cartProductsNumber,
                removeOneFromCart,
                addOneToCart,
                removeThisItemFromCart }}>
                {children}
            </CartContext.Provider>
    )
}