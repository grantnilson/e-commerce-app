import React from "react";
import Image from "next/image";

const Product = (product) => {
  return (
    <div
      className="p-4 flex-col hover:scale-105 hover:border-black transition transform space-y-2 border border-black/30"
      key={product.id}
    >
      <h3 className="text-xl font-semibold">{product.name} </h3>
      <p className="truncate">{product.description}</p>
      <div className="aspect-video relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          object-fit="cover"
        />
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
        <button
          className="py-0.5 h-full text-lg w-full bg-black text-white
     hover:text-black hover:bg-white border-black rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
