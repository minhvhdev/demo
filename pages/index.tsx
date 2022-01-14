import type { GetStaticProps, NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = ({ products }: AppProps) => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Demo</h1>
      <h3>Products</h3>
      <div className="row">
        {products.map((product: any, index: number) => {
          return (
            <div key={index} className="col-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body">
                  <Link href={`product/${product.id}`}>
                    <a className="card-text text-center d-block">{`${product.name} ${product.id}`}</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://61dd51f4f60e8f0017668706.mockapi.io/api/products"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Home;
