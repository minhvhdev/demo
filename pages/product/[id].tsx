import type { GetStaticPaths, GetStaticProps } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import ProductComponent from "../../components/product.component";

const ProductSSG = ({ product }: AppProps) => {
  return <ProductComponent product={product} />;
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    "https://61dd51f4f60e8f0017668706.mockapi.io/api/products/" + params.id
  );
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://61dd51f4f60e8f0017668706.mockapi.io/api/products"
  );
  const products = await res.json();
  const paths = products.map((product: any) => ({
    params: { id: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ProductSSG;
