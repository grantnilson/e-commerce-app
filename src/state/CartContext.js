import { createContext, useContext, useEffect, useMemo } from "react";
import useCart from "../hooks/useCart";
import useLocalStorage from "../hooks/useLocalStorage";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext({
  cartState: {},
  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  totalCartItems: 0,
  cartWithQuantity: [],
  totalPrice: 0,
});

const CartContextProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);

  const { getItem } = useLocalStorage("cart");
  const { setCartState, cartState, removeFromCart, addToCart, clearCart } =
    useCart();

  useEffect(() => {
    const localCart = getItem();
    if (localCart) {
      setCartState(localCart);
    }
  }, []);

  const totalCartItems = useMemo(() => {
    return Object.values(cartState).reduce((prev, curr) => prev + curr, 0);
  }, [cartState]);

  const { cartWithQuantity, totalPrice } = useMemo(() => {
    if (!products) return [];
    const cartWithQuantity = Object.keys(cartState).map((productId) => {
      // we have to parseInt the productId because it is a string as it gets stored in localstorage
      return {
        ...products.find((product) => product.id === +productId),
        quantity: cartState[productId],
      };
    });

    const totalPrice = cartWithQuantity.reduce((prev, curr) => {
      return prev + +curr.price * +curr.quantity;
    }, 0);

    return {
      cartWithQuantity,
      totalPrice,
    };
  }, [products, cartState]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        removeFromCart,
        addToCart,
        clearCart,
        totalCartItems,
        cartWithQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
