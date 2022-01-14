import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import ProductComponent from "../../components/product.component";

const ProductSSR = ({ product }: AppProps) => {
  return <ProductComponent product={product} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
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

export default ProductSSR;
