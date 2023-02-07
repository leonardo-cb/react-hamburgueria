import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

interface iUserContext {
    user: boolean;
    loading: boolean;
    productList: iProductList[];
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    createUser: (data: {
        name: string;
        email: string;
        password: string;
    }) => void;
    loginUser: (data: {
        email: string;
        password: string;
    }) => void;
    toRender: () => iProductList[];
}

interface iUserContextProps {
    children: React.ReactNode;
}

export interface iProductList {
    id?: number;
    name: string;
    category?: string;
    price: number;
    img: string;
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ( {children}: iUserContextProps ) => {

    const [user, setUser] = useState(false)
    const [productList, setProductList] = useState<iProductList[]>([])
    const [searchValue, setSearchValue] = useState<string>("")

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const toRender = () => {

        const value = productList.filter((product) => {

            if(searchValue === ""){
                return productList
            } else if(product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                return product
            }
        })

        return value

    }
    
    useEffect(() => {
        
            const getUser = async () => {
        
                const token = localStorage.getItem("@token")
        
                if(!token){
                    setLoading(false)
                    return;
                }
        
                const headers = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
        
                try {
                    const response = await api.get("/products", headers);
                    setUser(true)
                    setProductList(response.data)
                } catch (err) {
                    console.log(err)
                    localStorage.removeItem("@token")
                    navigate("/")
                } finally {
                    setLoading(false)
                }
            }

            getUser()
    }, [navigate])

    const createUser = async (data: {name: string; email: string; password: string; }) => {

        try {
            await api.post("/users", data)
            navigate("/")
        } catch (err){
            console.log(err)
        }

    }

    const loginUser = async (data: {email: string; password: string}) => {

        try {
            const { data: responseData } = await api.post("/login", data)
            localStorage.setItem("@token", responseData.accessToken)
            navigate("/shop")
        } catch (err) {
            console.log(err)
        }
    }

    return (
            <UserContext.Provider value={{ 
                user, 
                loading, 
                createUser, 
                loginUser, 
                productList,
                toRender,
                setSearchValue }}>
                {children}
            </UserContext.Provider>
    )
}

