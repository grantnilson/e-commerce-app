import React, { useState, useEffect, createContext } from "react";
import { showErrorToast } from "../utils";
import { supabase } from "../utils/supabaseClient";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase.from("product").select("*");
      if (error) {
        showErrorToast(error.message, setLoading);
      }
      console.log("products", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
