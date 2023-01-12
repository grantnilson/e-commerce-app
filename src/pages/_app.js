import { Toaster } from "react-hot-toast";
import AuthContextProvider from "../state/AuthContext";
import "../styles/globals.css";
import ProductsContextProvider from "../state/ProductsContext";
import CartContextProvider from "../state/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Toaster />
          <Component {...pageProps} />
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
