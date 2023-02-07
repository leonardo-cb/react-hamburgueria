import Global from "./styles/global";
import "./styles/fonts.css"
import { MainRoutes as Routes } from "./routes";
import { UserProvider } from "./contexts/userContext";
import { CartProvider } from "./contexts/cartContext";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
