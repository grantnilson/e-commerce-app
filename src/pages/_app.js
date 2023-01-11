import { Toaster } from "react-hot-toast";
import AuthContextProvider from "../state/AuthContext";
import "../styles/globals.css";
import ProductsContextProvider from "../state/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Toaster />
        <Component {...pageProps} />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
