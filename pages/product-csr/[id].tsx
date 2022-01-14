import useSWR from "swr";
import { AppProps } from "next/dist/shared/lib/router/router";
import ProductComponent from "../../components/product.component";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductSSG = ({ product }: AppProps) => {
  const { data, error } = useSWR("/api/navigation", fetcher);
  return <ProductComponent product={data} />;
};

export default ProductSSG;
