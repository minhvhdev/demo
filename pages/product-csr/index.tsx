import useSWR from "swr";
import { AppProps } from "next/dist/shared/lib/router/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductCSR = () => {
  const { data } = useSWR(
    "https://61dd51f4f60e8f0017668706.mockapi.io/api/products",
    fetcher
  );
  if (!data) return <h1 className="text-center mt-5">Loading...</h1>;
  return (
    <div className="container">
      <h1 className="text-center mb-5">Client Side Rendering</h1>
      <h3>Products</h3>
      <div className="row">
        {data.map((product: any, index: number) => {
          return (
            <div key={index} className="col-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body">
                  <p className="card-text text-center d-block">{`${product.name} ${product.id}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCSR;
