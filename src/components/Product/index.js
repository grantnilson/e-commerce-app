import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../../state/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Product = (product) => {
  const { cartState, removeFromCart, addToCart } = useContext(CartContext);

  console.log("cart state", cartState);
  return (
    <div
      className="p-4 flex-col hover:scale-105 hover:border-black transition transform space-y-2 border border-black/30"
      key={product.id}
    >
      <h3 className="text-xl font-semibold">{product.name} </h3>
      <p className="truncate">{product.description}</p>
      <div className="aspect-video relative">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            object-fit="cover"
          />
        )}
      </div>
      <p>
        <span className="text-gray-600">${product.price} </span>
      </p>
      <div className="lg:space-x-2 lg:space-y-0 space-x-0 space-y-2 flex-col flex lg:flex-row w-full">
        <button
          className="py-0.5 h-full text-lg w-full bg-black text-white
     hover:text-black hover:bg-white border-black rounded"
        >
          Buy Now
        </button>
        {!cartState[product.id] ? (
          <button
            className="py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white border-black border text-white rounded"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center justify-center w-full gap-x-4">
            <button
              className="py-0.5 h-full text-lg flex items-center justify-center w-full bg-black hover:text-black hover:bg-white border-black border text-white rounded"
              onClick={() => removeFromCart(product)}
            >
              <AiOutlineMinus />
            </button>
            {cartState[product.id]}
            <button
              className="py-0.5 h-full text-lg flex items-center justify-center w-full bg-black hover:text-black hover:bg-white border-black border text-white rounded"
              onClick={() => addToCart(product)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
