import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { ProductsContext } from "../state/ProductsContext";

const API_URL = "http://localhost:3000";

const Home = () => {
  const { products, loading } = useContext(ProductsContext);

  return (
    <Layout>
      <main>
        <section className="my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4">
          {loading && <p> loading... </p>}
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
