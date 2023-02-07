import { Routes, Route } from "react-router-dom"
import { ProtectedRoutes } from "../components/protectedRoutes"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { ShopPage } from "../pages/shop"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route element={<ProtectedRoutes />}> */}
                <Route path="/shop" element={<ShopPage />}/>
            {/* </Route> */}
        </Routes>
    )
}